// import { Typography } from '@mui/material';
import React from 'react';
import Header from './Header';
import Router from './routes';
import ThemeProvider from "./theme";
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';

function App() {
      return (

          <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Header sections={[]} title={''} />
              <Router />
          </ThemeProvider>
      );
  }



export default App;
