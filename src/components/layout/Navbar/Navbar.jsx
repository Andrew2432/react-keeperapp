import React, { useContext, useMemo, forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import {
  AppBar,
  List,
  Typography,
  Toolbar,
  Drawer,
  useTheme,
  makeStyles,
  withStyles,
  Switch,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
} from '@material-ui/core';

import WbSunny from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InfoIcon from '@material-ui/icons/Info';
import HomeIcon from '@material-ui/icons/Home';

import grey from '@material-ui/core/colors/grey';

import UIContext from '../../../context/ui/UIContext';

const drawerWidth = '250px';
const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const ThemeSwitch = withStyles({
  switchBase: {
    color: grey[50],
    '&$checked': {
      color: grey[900],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {
    backgroundColor: grey[50],
  },
})(Switch);

const Navbar = () => {
  const uiContext = useContext(UIContext);
  const { setTheme, drawer, toggleDrawer } = uiContext;

  const classes = useStyles();
  const theme = useTheme();

  function ListItemLink(props) {
    const { icon, primary, to } = props;

    const renderLink = useMemo(
      () =>
        forwardRef((itemProps, ref) => (
          <RouterLink to={to} ref={ref} {...itemProps} />
        )),
      [to]
    );

    return (
      <li>
        <ListItem button component={renderLink} onClick={toggleDrawer}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          edge="start"
          className={clsx(classes.menuButton, drawer && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Keeper App
        </Typography>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawer}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItemLink to="/" primary="Home" icon={<HomeIcon />} />
          <ListItemLink to="/about" primary="About" icon={<InfoIcon />} />
        </List>
        <Divider />
        <List>
          <ListItem>
            <ListItemText>Change Theme</ListItemText>
            <ThemeSwitch
              size="medium"
              onChange={setTheme}
              checkedIcon={<WbSunny fontSize="small" />}
              icon={<Brightness3Icon fontSize="small" />}
            ></ThemeSwitch>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
