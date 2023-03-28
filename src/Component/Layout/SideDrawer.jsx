import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import MonitorIcon from '@mui/icons-material/Monitor';
import CloudIcon from '@mui/icons-material/Cloud';
import TableChartIcon from '@mui/icons-material/TableChart';
import CreateIcon from '@mui/icons-material/Create';
import HelpIcon from '@mui/icons-material/Help';
import InventoryIcon from '@mui/icons-material/Inventory';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import SettingsIcon from '@mui/icons-material/Settings';
import sglLogo from '../../resources/sgl_logo.png';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Drawer, IconButton, List, ListItem, ListItemText, ListItemButton, ListItemIcon, ListItemAvatar, Avatar, Collapse } from '@mui/material';
import { spacing } from '@mui/system';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const SideDrawer = () => {


    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    const drawerElement = [
        {
            icon: <HomeIcon />,
            primary: 'Dashboard',
            secondary: null,
            to: ''
        },
        // {
        //     icon: <MonitorIcon />,
        //     primary: 'Light and Growth Analysis',
        //     secondary: [{
        //         // icon: < />,
        //         title: 'Field Quality Analysis',
        //         to: ''
        //     },
        //     {
        //         // icon: < />,
        //         title: 'Light Optimization Analysis',
        //         to: ''
        //     },
        //     {
        //         // icon: < />,
        //         title: 'Light Transmission',
        //         to: ''
        //     }]
        // },
        {
            icon: <CreateIcon />,
            primary: 'Data Registration',
            secondary: [
                'SQL Support Only',
                'Data Registration History',
            ],
        },
        {
            icon: <InventoryIcon />,
            primary: 'Products',
            secondary: [
                'Monitoring'
            ],
        },
        {
            icon: <CloudIcon />,
            primary: 'Forecasts and Advice',
            secondary: [
                'Lighting Advice',
                'Turfgrass Disease Forecast',
                'TC/TF advice',
                'Weather Forecast'
            ],
        },
        {
            icon: <HelpIcon />,
            primary: 'Argonomical Support',
            secondary: [
                'Reports',
                'Contact'
            ],
        },
        {
            icon: <SettingsIcon />,
            primary: 'Management and Settings',
            secondary: [
                'Settings and Target',
                'Archive',
                'Support'
            ],
        },
    ];

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(() => drawerElement.map((eachElement) => false));

    const handleSubMenuExpand = (event) => {
        const index = parseInt(event.currentTarget.dataset.index, 10);
        const newIsSubMenuOpen = [...isSubMenuOpen];
        newIsSubMenuOpen[index] = !newIsSubMenuOpen[index];
        setIsSubMenuOpen(newIsSubMenuOpen);
    }

    return (
        <Box>
            <IconButton color='inherit' onClick={() => setIsDrawerOpen(true)}>
                <MenuIcon></MenuIcon>
            </IconButton>
            <Drawer
                anchor='left'
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box p={2} width='290px' textAlign='center' role='presentation' padding={0} >
                    <List sx={{ padding: 0, }}>
                        <ListItem disablePadding>
                            <img src={sglLogo} alt='SGL Logo' width={300} height={100} ></img>
                        </ListItem>
                        {
                            drawerElement.map((eachElement, index) => (
                                <React.Fragment key={index}>
                                    <ListItemButton component={Link} to='/'>
                                        <ListItemIcon><ListItemAvatar><Avatar>{eachElement.icon}</Avatar></ListItemAvatar></ListItemIcon>
                                        <ListItemText>{eachElement.primary}</ListItemText>
                                        {eachElement.secondary && <IconButton
                                            data-index={index} onClick={handleSubMenuExpand}
                                        >
                                            {isSubMenuOpen[index] ? <ExpandLess /> : <ExpandMore />}
                                        </IconButton>}

                                    </ListItemButton>
                                    {
                                        eachElement.secondary && eachElement.secondary.map((eachSecondary, i) => (
                                            <Collapse in={isSubMenuOpen[index]} key={i}>
                                                <ListItemButton sx={{ pl: "25px" }} >
                                                    <ListItemIcon><ListItemAvatar><Avatar>{eachElement.icon}</Avatar></ListItemAvatar></ListItemIcon>
                                                    <ListItemText>{eachSecondary}</ListItemText>
                                                </ListItemButton>
                                            </Collapse>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                        <ListItem disablePadding >
                            <ListItemButton sx={{ alignItems: 'center', justifyContent: 'center', }} onClick={() => setIsDrawerOpen(false)}>
                                <ListItemIcon ><KeyboardDoubleArrowLeftIcon /></ListItemIcon>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer >

        </Box >
    )
}

export default SideDrawer