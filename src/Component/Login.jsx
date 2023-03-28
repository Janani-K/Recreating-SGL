import { Grid, Box, Stack, Typography, Button, TextField, Switch, Paper, Card, FormControlLabel, Link } from '@mui/material';
import sglLogo from '../resources/sgl_logo.png';
import Footer from './Footer';
import HomePage from './HomePage';
// import { useHistory } from 'react-router-dom'

const Login = ({ props }) => {

    // const history = useHistory();

    return (
        <>

            <Stack display="flex"
                justifyContent="center"
                alignItems="center"
            >
                <Box
                    aria-label='login-branding-header'
                    sx={{
                        backgroundColor: "#ff6200",
                        width: "100%",
                        height: "142px",
                        justifyContent: 'center',
                        display: "flex"
                    }}
                >
                    <img src={sglLogo} alt='SGL Logo' width={300} height={142} ></img>
                </Box>

                <Box
                    aria-label='login-container'
                    sx={{
                        width: '300px',
                        height: '241px',
                        margin: '10px'
                    }}
                >
                    <Card width='300px' height='241px' padding='5px' margin='10px'>
                        <Stack padding='10px' >
                            <TextField label='User name' variant='standard' margin='normal'></TextField>
                            <TextField label='Password' type='password' variant='standard' margin='normal'></TextField>
                        </Stack>
                        <Stack spacing={1} margin='7px'>
                            <FormControlLabel
                                value="end"
                                control={<Switch color="primary" />}
                                label="Remember me?"
                                labelPlacement="end"
                            />
                            <Button variant='contained' color='warning' onClick={() => props.history.push('/homepage')} >Log In</Button>
                            <Link variant='sub-title2' underline="none" href="#" sx={{ color: '#ff6200', padding: '10px' }}  >Forgot your password?</Link>
                        </Stack>
                    </Card>
                    <Box aria-label='login-footer'>
                        <Footer></Footer>
                    </Box>
                </Box>
            </Stack >
        </>
    )
}

export default Login;