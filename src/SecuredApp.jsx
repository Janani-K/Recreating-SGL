import App from './App'
import {
    AuthProvider,
    AuthService,
    useAuth
} from 'react-oauth2-pkce'
import { useEffect } from 'react';
import Dashboard from './Component/Pages/Dashboard';
import HomePage from "./Component/Layout/HomePage"
import LGAnalysis from "./Component/Pages/LGAnalysis";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import NotFound from "./Component/Pages/NotFound";
import AccountSettings from "./Component/Pages/AccountSettings";
import { Backdrop, Box, Button, CircularProgress, Stack, Typography } from '@mui/material';
import ChangePassword from './Component/Pages/ChangePassword';
import Contact from './Component/Pages/Contact';
import { Suspense } from 'react';
import { useTranslation, Trans } from 'react-i18next';

const authService = new AuthService({
    clientId: 'sgl-portal-client-prd',
    // clientSecret: '6E8CB9C3-4DB6-4B62-A789-61912265A16A',
    provider: 'https://sglidsrv.azurewebsites.net/identity/connect',
    redirectUri: 'https://localhost:3000',
    // scopes: ['SglPortal', 'SglPortal.w', 'openid', 'profile', 'email', 'roles', 'offline_access'],
    scopes: ['openid'],
});

const SecuredApp = () => {
    const { authService } = useAuth();

    const login = async () => authService.authorize();
    const logout = async () => authService.logout();

    const token = authService.getAuthTokens();
    console.log("Token++", token)

    const { t, i18n } = useTranslation();

    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<HomePage logout={logout} t={t} i18n={i18n} />}>
                <Route index element={<Dashboard />} />
                <Route path='/LightGrowthAnalysis' element={<LGAnalysis />} />
                {/* <Route path="1" element={ }/> */}
                {/* </Route> */}
                <Route path='/Account/Settings' element={<AccountSettings t={t} />} />
                <Route path='/Account/ChangePassword' element={<ChangePassword t={t} />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='*' element={<NotFound />} />
            </Route>
        )
    )

    return (
        <div>
            {
                authService.isPending() && <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={true}        >
                    <CircularProgress color="inherit" />
                </Backdrop>
            }
            {
                authService.isAuthenticated() ? (<RouterProvider router={router} />) :
                    (
                        < Stack sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Button onClick={login} color='warning' variant="contained">Login</Button>
                            <Typography>This will redirect you to SGL login page for authentication!</Typography>
                        </Stack >
                    )
            }
        </div>
    );
}

const WrappedSecuredApp = () => {
    return (
        <AuthProvider authService={authService} >
            <Suspense fallback='...is loading'>
                <SecuredApp />
            </Suspense>
        </AuthProvider>
    );
}

export default WrappedSecuredApp