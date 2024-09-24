import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-rvnaa1xwfrzloh4s.us.auth0.com"
    clientId="LTL32W6muRjEi2NZDeVlfoT4S87FU2ng"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
