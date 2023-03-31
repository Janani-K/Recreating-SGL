import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Card from './Component/Pages/Card';
import SecuredApp from './SecuredApp';
import './i18n'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SecuredApp />
  </React.StrictMode>
);


