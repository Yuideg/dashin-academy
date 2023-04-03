import React from 'react'

import { styled } from '@mui/system';
import VerticalNav  from './VerticalNav';
import { Fragment } from 'react';
import Scrollbar from 'react-perfect-scrollbar';

const StyledScrollBar = styled(Scrollbar)(() => ({
    paddingLeft: '1rem',
    paddingRight: '1rem',
    position: 'relative',
}));

const Sidenav = () => {
    return (
        <Fragment>
            <StyledScrollBar options={{ suppressScrollX: true }}>
                <VerticalNav  />
            </StyledScrollBar>
        </Fragment>
    );
};

export default Sidenav;
