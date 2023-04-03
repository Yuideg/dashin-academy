import React from 'react';
import Header from './Header';
import Router from './routes';
import ThemeProvider from "./theme";
import ScrollToTop from './components/scroll-to-top';
import { StyledChart } from './components/chart';
import CourseAdd from "./components/modals/CourseAdd";

function App() {

    return (

        <ThemeProvider>
              <ScrollToTop />
              <StyledChart />
              <Header sections={[]} title={''} />
              <CourseAdd />
              <Router />
          </ThemeProvider>
      );
  }



export default App;