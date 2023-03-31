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
import sglInitials from '../../resources/sgl_initials.png';
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
            to: '/'
        },
        {
            icon: <MonitorIcon />,
            primary: 'Light and Growth Analysis',
            secondary: [{
                // icon: < />,
                title: 'Field Quality Analysis',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Light Optimization Analysis',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Light Transmission',
                to: '/'
            }]
        },
        {
            icon: <CreateIcon />,
            primary: 'Data Registration',
            secondary: [{
                // icon: < />,
                title: 'SQL Support Only',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Data Registration History',
                to: '/'
            }]
        },
        {
            icon: <InventoryIcon />,
            primary: 'Products',
            secondary: [{
                // icon: < />,
                title: 'Monitoring',
                to: '/'
            }
            ],
        },
        {
            icon: <CloudIcon />,
            primary: 'Forecasts and Advice',
            secondary: [{
                // icon: < />,
                title: 'Lighting Advice',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Turfgrass Disease Forecast',
                to: '/'
            },
            {
                // icon: < />,
                title: 'TC/TF advice',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Weather Forecast',
                to: '/'
            }],
        },
        {
            icon: <HelpIcon />,
            primary: 'Argonomical Support',
            secondary: [{
                // icon: < />,
                title: 'Reports',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Contact',
                to: '/Contact'
            }],
        },
        {
            icon: <SettingsIcon />,
            primary: 'Management and Settings',
            secondary: [{
                // icon: < />,
                title: 'Settings and Target',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Archive',
                to: '/'
            },
            {
                // icon: < />,
                title: 'Support',
                to: '/'
            }],
        },
    ];

    const [isSubMenuOpen, setIsSubMenuOpen] = useState(() => drawerElement.map((eachElement) => false));

    // const handleSubMenuExpand = (event) => {
    //     const index = parseInt(event.currentTarget.dataset.index, 10);
    //     const newIsSubMenuOpen = [...isSubMenuOpen];
    //     newIsSubMenuOpen[index] = !newIsSubMenuOpen[index];
    //     setIsSubMenuOpen(newIsSubMenuOpen);
    // }

    const handleSubMenuExpand = (event) => {
        const index = parseInt(event.currentTarget.dataset.index, 10);
        const indexPrevState = isSubMenuOpen[index]
        const newIsSubMenuOpen = isSubMenuOpen.map((eachElement) => false);
        newIsSubMenuOpen[index] = !indexPrevState;
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
                        <ListItem sx={{ backgroundColor: '#ff6200', height: '64px' }}>
                            <img src={sglInitials} alt='SGL' width={70} height={30} ></img>
                        </ListItem>
                        {
                            drawerElement.map((eachElement, index) => (
                                <React.Fragment key={index}>
                                    <ListItemButton component={Link} to={eachElement.to}>
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
                                                <ListItemButton component={Link} to={eachSecondary.to} sx={{ pl: "70px" }} >
                                                    {/* <ListItemIcon><ListItemAvatar><Avatar>{eachElement.icon}</Avatar></ListItemAvatar></ListItemIcon> */}
                                                    <ListItemText>{eachSecondary.title}</ListItemText>
                                                </ListItemButton>
                                            </Collapse>
                                        ))
                                    }
                                </React.Fragment>
                            ))
                        }
                    </List>
                    <List sx={{ position: 'absolute', bottom: '0', width: '100%' }}>
                        <ListItem disablePadding  >
                            <ListItemButton onClick={() => setIsDrawerOpen(false)} sx={{ justifyContent: 'center' }}>
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