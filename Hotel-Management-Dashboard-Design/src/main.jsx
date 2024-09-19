import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-yrg51lrrl3txucx4.us.auth0.com"
    clientId="I2NiMJeF6CkqqUEyVnOki5YguPWUJCFe"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
