import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import {
    Collapse,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListSubheader,
    Skeleton,
    Stack,
    Tooltip,
    Typography
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import HighChart from "../HighChart";
import axios from "axios";
import { useState, useEffect } from "react";
import Timer from "../Timer";

const Card = ({ pitchData }) => {

    const [counter, setCounter] = useState(60);

    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [mostRecentAt, setMostRecentAt] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const { data } = await axios.get('http://localhost:4000/data');
            setloading(false);
            setCounter(60);
            setData(data);
            let date = new Date(data[0].MostRecent.At)
            setMostRecentAt(date.toLocaleString("en-US"));
        } catch (error) {
            console.log(error)
            setError(`Sorry, unable to fetch data due to ${error.message}...!`)
        }

    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        (counter > 0) ? setTimeout(() => setCounter(counter - 1), 1000) : fetchData();
    }, [counter])

    const [isChartOpen, setIsChartOpen] = useState(() => data.map((eachData) => false));

    const handleChartExpand = (event) => {
        const index = parseInt(event.currentTarget.dataset.index, 10);
        const newIsChartOpen = [...isChartOpen];
        newIsChartOpen[index] = !newIsChartOpen[index];
        setIsChartOpen(newIsChartOpen);
    }

    return (
        <Grid container spacing={2}>
            <Grid item>
                <Paper
                    elevation={4}
                    sx={{
                        width: "320px",
                        minHeight: "500px",
                        overflow: 'hidden',
                    }}
                >
                    {loading && <Skeleton variant="rounded" width={280} height={500} />}

                    {error && <Typography variant="subtitle2" margin={2}>{error}</Typography>}

                    {!loading && !error && data.length > 0 &&
                        <>
                            <Stack
                                direction="row"
                                aria-label="title"
                                sx={{
                                    justifyContent: "space-between",
                                    height: "auto",
                                    backgroundColor: "#e5e5e5",
                                    padding: "10px",

                                }}
                            >
                                <Typography variant='subtitle2' aria-label="text">
                                    Most Recent Values from L-50
                                </Typography>
                                <Tooltip title="tool-tip info" placement="top">
                                    <HelpOutlineIcon fontSize="small" />
                                </Tooltip>
                            </Stack>

                            <Stack
                                aria-label="timer"
                                direction="row"
                                sx={{
                                    alignItem: 'center',
                                    justifyContent: "space-between",
                                    margin: "5px",
                                }}
                            >
                                <Typography variant="body2" fontSize='11px' aria-label="datetime"> {mostRecentAt} </Typography>
                                <Typography variant="body2" fontSize='11px'>next: {counter}</Typography>
                            </Stack>

                            <Box aria-label="body" >
                                <List
                                    sx={{
                                        justifyContent: "space-between",
                                        padding: '0px 5px 10px 10px',
                                    }}
                                >
                                    {
                                        data && data.map((eachItem, index) => (
                                            <React.Fragment key={index}>
                                                <ListItem disablePadding divider >
                                                    <ListItemText>
                                                        <Typography variant="body2">{eachItem.Name}</Typography>
                                                    </ListItemText>
                                                    <Typography variant="body2">{eachItem.MostRecent.Value}</Typography>
                                                    <Typography variant="body2">{eachItem.Unit}</Typography>
                                                    <IconButton
                                                        data-index={index}
                                                        onClick={handleChartExpand}
                                                    // onClick={() => {
                                                    //     setIsOpen(!isOpen);
                                                    // }}
                                                    >
                                                        {isChartOpen[index] ? <ExpandLess /> : <ExpandMore />}
                                                    </IconButton>
                                                </ListItem>
                                                <Collapse in={isChartOpen[index]} >
                                                    <List>
                                                        <ListItem> <HighChart /></ListItem>
                                                    </List>
                                                </Collapse>
                                            </React.Fragment>
                                        ))
                                    }
                                </List>

                            </Box>
                        </>
                    }
                </Paper>
            </Grid>
        </Grid >
    );
}
export default Card;