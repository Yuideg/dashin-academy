import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import AccountMenu from "./components/header/BadgeAvatars";

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          Dashin Academy Portal
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
          <Button variant="text" size="small" href='/login'>
              sign in
          </Button>
          <Button variant="text" size="small" href='/auth/register'>
              Sign up
          </Button>
          <AccountMenu />

      </Toolbar>
    </React.Fragment>
  );
}