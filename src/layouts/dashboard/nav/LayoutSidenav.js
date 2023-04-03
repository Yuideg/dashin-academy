import React from 'react';
import { Box, styled, useTheme } from '@mui/system';
import { themeShadows } from '../../../theme/themeColors';
import useSettings from '../../../hooks/useSettings';
import { sidenavCompactWidth, sideNavWidth } from '../../../utils/constant';
import Sidenav from "../../../sections/dashboard/sidenav/SideNav";
import Brand from "./Brand";

const SidebarNavRoot = styled(Box)(({ theme, width }) => ({
    position: 'relative',
    top: 0,
    left: 0,
    height: 'auto',
    width: width,
    boxShadow: themeShadows[8],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    zIndex: 111,
    overflow: 'hidden',
    color: 'white',
    transition: 'all 250ms ease-in-out',
    '&:hover': {
        width: sideNavWidth,
        '& .sidenavHoverShow': {
            display: 'block',
        },
        '& .compactNavItem': {
            width: '100%',
            maxWidth: '100%',
            '& .nav-bullet': {
                display: 'block',
            },
            '& .nav-bullet-text': {
                display: 'none',
            },
        },
    },
}));

const NavListBox = styled(Box)(() => ({
    overflow: "auto",
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
}));

const LayoutSidenav = () => {
    const { settings, updateSettings } = useSettings();
    const leftSidebar = settings.NavSettings.leftSidebar;
    const { mode, bgImgURL } = leftSidebar;
    const handleSidenavToggle =()=>console.log('toggle on');
    const getSidenavWidth = () => {
        switch (mode) {
            case 'compact':
                return sidenavCompactWidth;
            default:
                return sideNavWidth;
        }
    };

    return (
        <SidebarNavRoot width={getSidenavWidth()}>
        <NavListBox sx={{bgcolor:'#222A45'}}>
            <Brand />
            <Sidenav />
        </NavListBox>
        </SidebarNavRoot>
    );
};

export default React.memo(LayoutSidenav);
