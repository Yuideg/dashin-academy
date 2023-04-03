import { themes } from '../../../theme/initThemes';
import NavSettings from './NavSettings';

export const LayoutSettings = {
    activeLayout: 'layout1',
    activeTheme: 'blue',
    perfectScrollbar: false,

    themes: themes,
    NavSettings, // open ./NavSettings.js

    secondarySidebar: {
        show: true,
        open: false,
        theme: 'slateDark1', // View all valid theme colors inside ThemeProvider/themeColors.js
    },
    // Footer options
    footer: {
        show: true,
        fixed: false,
        theme: 'slateDark1',
    },
};
