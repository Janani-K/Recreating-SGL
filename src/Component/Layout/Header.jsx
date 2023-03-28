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

const Header = ({ logout }) => {
    // const [language, setlanguage] = useState('English US')

    // const handleChange = (event) => {
    //     setlanguage(event.target.value)
    // }

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
        // <Box>
        //     <Stack
        //         direction='row'
        //         justifyContent='space-between'
        //         height='60px'
        //         width=''
        //         sx={{
        //             backgroundColor: '#E5E4E2',
        //             position: 'absolute'
        //         }}
        //     >
        //         <QuestionAnswerIcon></QuestionAnswerIcon>
        //         <Stack direction='row'>
        //             {/* <FormControl fullWidth size='auto'>
        //                  <InputLabel id="language-select-label">language</InputLabel>
        //                  <Select
        //                      labelId="language-select-label"
        //                      id="language-select"
        //                      value={language}
        //                      label="language"
        //                      onChange={handleChange}
        //                      defaultValue={'English US'}
        //                  >
        //                      <MenuItem value={'english'}>English US</MenuItem>
        //                      <MenuItem value={'nederlands'}>Nederlands</MenuItem>
        //                      <MenuItem value={'deutsch'}>Deutsch</MenuItem>
        //                  </Select>
        //              </FormControl>
        //              <img src='sglLogo' alt='profile_picture' width={'100px'} height={'100px'}></img> */}
        //             <Typography>User name</Typography>
        //         </Stack>
        //     </Stack>
        // </Box>
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
                    <IconButton onClick={handleClick} sx={{ position: 'absolute', right: '0px' }}><Avatar alt='bokhoven stadion' src={userImage}></Avatar></IconButton>
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
                    {/* <FormControl fullWidth size='auto'>
                        <InputLabel id="language-select-label">language</InputLabel>
                        <Select
                            labelId="language-select-label"
                            id="language-select"
                            value={language}
                            label="language"
                            onChange={handleChange}
                            defaultValue={'English US'}
                        >
                            <MenuItem value={'english'}>English US</MenuItem>
                            <MenuItem value={'nederlands'}>Nederlands</MenuItem>
                            <MenuItem value={'deutsch'}>Deutsch</MenuItem>
                        </Select>
                    </FormControl> */}
                </Toolbar>
            </AppBar>
        </Box >

    )
}

export default Header