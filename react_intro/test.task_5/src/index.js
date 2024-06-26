import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';


// Root for the main app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Root for the notifications
const rootNotifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
rootNotifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
)