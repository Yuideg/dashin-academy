import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { HelmetProvider } from 'react-helmet-async';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement) ;

root.render(
  <>
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>
  </>
);

serviceWorker.unregister();

reportWebVitals();

// protovpn authentication
// username = 11zUeGE6LUowY46m
// password = l2itI3Uxo00W7Vv4P7VTTk6f0JlGddFC
