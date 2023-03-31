import React, { useEffect, useState } from 'react'
import SideDrawer from '../Layout/SideDrawer'
import Card from './Card';
import useFetch from '../../custom-hook/useFetch'
import { Grid } from '@mui/material';

const Dashboard = () => {

    // const { data: pitchData, isDataFetchPending, dataFetchError } = useFetch('http://localhost:4000')

    // console.log(data[0]);

    // const [data, setData] = useState([]);
    // const [date, setDate] = useState('');

    // const getData = async () => {
    //     try {
    //         const fetchData = async () => {
    //             const response = await fetch('https://portal.sglsystem.com/api/v1/notifications/14016', {
    //                 method: "POST",
    //                 headers: {
    //                     "X-SGL-Usn-Key": "9c8c9d1aa41ff6aaee97964d979d36ef"
    //                 }
    //             });
    //             console.log("ÄPI hit")
    //             const jsonData = await response.json();
    //             setData(jsonData.MostRecentPitchData.Datastreams);
    //             setDate(jsonData.MostRecentTimestamp)
    //         };

    //         fetchData();
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(() => {
        // const fetchData = async () => {
        //   const response = await fetch('https://localhost:3000/api/v1/mostrecent/194', {
        //     method: "POST",
        //     headers: {
        //       "X-SGL-Usn-Key": "9c8c9d1aa41ff6aaee97964d979d36ef"
        //     }
        //   });

        //   const jsonData = await response.json();
        //   setData(jsonData.MostRecentPitchData.Datastreams);
        //   setDate(jsonData.MostRecentTimestamp)
        // };

        // getData();
        // const interval = setInterval(() => { getData() }, 60000);
        // return () => { clearInterval(interval) }

    }, []);

    return (
        <>
            {/* <Card pitchData={pitchData} /> */}
            {/* {console.log(pitchData)} */}
            <Grid container spacing={2} justifyContent='center'>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
                <Grid item><Card /></Grid>
            </Grid>
        </>
    )
}

export default Dashboard