import React from "react";
// import styled from "styled-components";
// import { AppBar, Button, Toolbar, Typography,Theme } from "@mui/material";
// import { Link } from "react-router-dom";
// import BidderLogo from "../../assets/images/logo.svg";
// // import { RouterConfig } from "../../utils/types";
// import { createStyles, makeStyles } from "@mui/styles";
// // import { Button,  } from "@mui/material";
//
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     appBar: {
//       padding: theme.spacing(2),
//       borderBottom: `1px solid ${theme.palette.divider}`,
//       background: "#ffffff",
//     },
//     toolbar: {
//       flexWrap: "wrap",
//     },
//     toolbarTitle: {
//       flexGrow: 1,
//     },
//     link: {
//       margin: theme.spacing(1, 2),
//     },
//   })
// );
//
// interface HeaderProps {
//   // name: RouterConfig[];
// }
//
// const NavButton = styled(Button)`
//   background: #0cc1ed;
//   border-radius: 25px;
//   padding: 10px;
//   margin-left: 10px;
//   color: #ffffff;
// `;
//
// const Header: React.FC<HeaderProps> = ({ name:any }: HeaderProps) => {
//   const classes = useStyles();
//   return (
//     <AppBar position="sticky" elevation={2} className={classes.appBar}>
//       <Toolbar className={classes.toolbar}>
//         <Typography
//           variant="h6"
//           color="`  inherit"
//           noWrap
//           className={classes.toolbarTitle}
//         >
//           <Link to="/">
//             <img src={BidderLogo} alt="bidder" />
//           </Link>
//         </Typography>
//         <nav>
//           {name.map((route) => (
//             <Link to={route.path} className={classes.link}>
//               <Button>{route.name}</Button>
//             </Link>
//           ))}
//         </nav>
//       </Toolbar>
//     </AppBar>
//   );
// };
//
// export default Header;
