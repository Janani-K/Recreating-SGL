import { AppBar, Box, IconButton, Stack, Toolbar, Typography, FormControl, InputLabel, Select, MenuItem, Avatar, Menu, ListItemIcon, Popover, Paper } from '@mui/material'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import KeyIcon from '@mui/icons-material/Key';
import SideDrawer from './SideDrawer';
import { useState } from 'react';
import userImage from '../../resources/bokhovenstadion.jpg';
import { color } from '@mui/system';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

const Header = ({ logout, t, i18n }) => {
    const [language, setlanguage] = useState('en')

    const handleChange = (event) => {
        setlanguage(event.target.value)
        i18n.changeLanguage(event.target.value)
    }

    const languages = [{
        key: 'en',
        value: 'English US',
    }, {
        key: 'en-GB',
        value: 'English GB',
    }, {
        key: 'de',
        value: 'Deutsch',
    }, {
        key: 'fr',
        value: 'Français',
    }, {
        key: 'it',
        value: 'Italiano',
    }, {
        key: 'nl',
        value: 'Nederlands',
    }, {
        key: 'pt-BR',
        value: 'Português BR',
    }, {
        key: 'pt-PT',
        value: 'Português PT',
    }, {
        key: 'es',
        value: 'Español',
    }, {
        key: 'tr',
        value: 'Türkçe',
    }, {
        key: 'ru',
        value: 'русский',
    }, {
        key: 'pl',
        value: 'Polski',
    }, {
        key: 'hu',
        value: 'Magyar',
    }, {
        key: 'zh',
        value: '中文',
    }, {
        key: 'ja',
        value: '日本語',
    }, {
        key: 'cs',
        value: 'čeština',
    }
    ]

    const [popperAnchorEl, setPopperAnchorEl] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box>
            <AppBar sx={{ backgroundColor: '#ff6200' }}>
                <Toolbar>
                    <SideDrawer></SideDrawer>
                    <IconButton edge='start' sx={{ margin: '10px', color: 'inherit' }} onClick={(e) => setPopperAnchorEl(e.currentTarget)}><QuestionAnswerIcon></QuestionAnswerIcon></IconButton>
                    <Popover
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        anchorEl={popperAnchorEl}
                        open={Boolean(popperAnchorEl)}
                        onClose={() => setPopperAnchorEl(null)}
                    >
                        <Paper elevation={1} sx={{ padding: '5px' }}>0 new news items</Paper>
                    </Popover>
                    <Box sx={{ display: 'flex', direction: 'row', position: 'absolute', right: '0px' }}>
                        <Box width='150px'>
                            <FormControl fullWidth>
                                <Select
                                    id="language-select"
                                    value={language}
                                    onChange={handleChange}
                                    color='warning'
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                            },
                                        },
                                    }}
                                >
                                    {
                                        languages.map(language => <MenuItem value={language.key}>{language.value}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </Box>
                        <IconButton onClick={handleClick} ><Avatar alt='bokhoven stadion' src={userImage}></Avatar></IconButton>
                    </Box>

                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        {/* <MenuItem onClick={handleClose}>
                            <Avatar /> Profile
                        </MenuItem> */}
                        <MenuItem component={Link} to='/Account/Settings'>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>
                        <MenuItem component={Link} to='/Account/ChangePassword'>
                            <ListItemIcon>
                                <KeyIcon fontSize="small" />
                            </ListItemIcon>
                            Change Password
                        </MenuItem>
                        <MenuItem onClick={logout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box >

    )
}

export default Header