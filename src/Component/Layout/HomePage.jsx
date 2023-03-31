import { Container, Grid, Stack, Box } from '@mui/material'
import Footer from './Footer';
import Header from './Header';
import { Outlet } from "react-router-dom";

import { useLocation } from 'react-router-dom';
import BackToTop from '../Pages/BackToTop';

const HomePage = ({ logout, t, i18n }) => {

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const authorizationCode = searchParams.get('code');

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 'calc(100vh - 20px)', overflowX: 'hidden', overflowY: 'auto' }}>
            <Header logout={logout} t={t} i18n={i18n} />
            <Box sx={{ margin: '80px auto ', flexGrow: '1', }}>
                <Outlet />
            </Box>
            <Box sx={{ position: 'fixed', zIndex: 2, bottom: '2vh', right: '2vh' }}>
                <BackToTop />
            </Box>
            <Box sx={{ bottom: '20px' }}>
                <Footer />
            </Box>
        </Box >
    )
}

export default HomePage