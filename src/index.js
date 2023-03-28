import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Component/Pages/Card';
import SecuredApp from './SecuredApp';


import { AuthContext, AuthProvider, TAuthConfig, TRefreshTokenExpiredEvent } from "react-oauth2-code-pkce"

const authConfig: TAuthConfig = {
  clientId: 'sgl-portal-client-prd',
  authorizationEndpoint: 'https://sglidsrv.azurewebsites.net/identity/connect/authorize',
  tokenEndpoint: 'https://sglidsrv.azurewebsites.net/identity/connect/token',
  redirectUri: 'https://localhost:3000/',
  scope: 'someScope openid',
  onRefreshTokenExpire: (event: TRefreshTokenExpiredEvent) => window.confirm('Session expired. Refresh page to continue using the site?') && event.login(),
}

const UserInfo = () => {
  const { token, tokenData } = useContext(AuthContext)

  return <>
    <h4>Access Token</h4>
    <pre>{token}</pre>
    <h4>User Information from JWT</h4>
    <pre>{JSON.stringify(tokenData, null, 2)}</pre>
  </>
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AuthProvider authConfig={authConfig}>
      <UserInfo />
    </AuthProvider> */}
    <SecuredApp />
    {/* <App /> */}
    {/* <Card /> */}
  </React.StrictMode>
);


