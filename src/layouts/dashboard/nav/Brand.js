import React from 'react'
import { Box, styled,IconButton } from '@mui/material';
import DashinLogo from '../../../dashin-academy-logo.svg';
import useSettings from '../../../hooks/useSettings';

const BrandRoot = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
}));

const Brand = () => {
    const { settings } = useSettings();
    const leftSidebar = settings.NavSettings.leftSidebar;
    const { mode } = leftSidebar;

    return (
        <BrandRoot>
            <Box  alignItems="center">
              <IconButton>
                  <img src={DashinLogo} alt='logo'   width="150" height="150"/>
              </IconButton>
            </Box>


        </BrandRoot>
    );
};

export default Brand;
