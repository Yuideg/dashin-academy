import React from 'react'
import { ThemeProvider, useTheme } from '@mui/material';
import useSettings from '../../hooks/useSettings';

const SidenavTheme = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const sidenavTheme = settings.themes[settings.NavSettings.leftSidebar.theme] || theme;

  return <ThemeProvider theme={sidenavTheme}></ThemeProvider>;
};

export default SidenavTheme;
