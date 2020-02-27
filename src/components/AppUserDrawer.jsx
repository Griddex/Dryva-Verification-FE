import React, { Suspense, lazy } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuList from "@material-ui/core/MenuList";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuItem from "@material-ui/core/MenuItem";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import unauthorized from "./unauthorized";
import authService from "./../services/authService";

const VehicleRoute = lazy(() => import("../Routes/Vehicle/vehicleroute"));
const DriversListRoute = lazy(() =>
  import("../Routes/DriversList/DriversListRoute")
);
const RegisterRoute = lazy(() =>
  import("../Routes/Admin/Register/registerroute")
);
const RolesRoute = lazy(() => import("../Routes/Admin/rolesroute"));
const RegistrationSuccess = lazy(() =>
  import("./../Routes/Admin/Register/registrationSuccess")
);
const EmailSettingsRoute = lazy(() =>
  import("./../Routes/Admin/Settings/SmtpRoute")
);
const OfficersManagementRoute = lazy(() => import("./OfficerManagementForm"));

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  link: {
    margin: theme.spacing(1, 1.5)
  }
}));

export default function OfficerDrawer(props) {
  const { history } = props;
  const auth = authService();
  const currentRole = auth.Role;

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuText = (link, currentRole) => {
    const menuLinkText = {
      [`/${currentRole}/register`]: "User Register",
      [`/${currentRole}/roles_and_permissions`]: "Roles and Permissions",
      [`/${currentRole}/officers_management`]: "Officers Management",
      [`/${currentRole}/settings`]: "Email Settings",
      [`/${currentRole}/DriversList`]: "Drivers Records",
      [`/${currentRole}/verification`]: "Drivers Verification"
    };

    return menuLinkText[link];
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dryva Driver Verification
          </Typography>
          <div
            style={{
              marginLeft: "auto",
              marginRight: 0
            }}
          >
            <Typography variant="h6" color="inherit">
              Welcome {auth.sub} [{auth.Role}]
            </Typography>
            <Button
              size="small"
              variant="outlined"
              onClick={() => {
                localStorage.clear();
                history.replace("/logout");
              }}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        {currentRole && currentRole === "Admin" ? (
          <MenuList>
            {[
              `/${currentRole}/register`,
              `/${currentRole}/roles_and_permissions`,
              `/${currentRole}/officers_management`,
              `/${currentRole}/settings`,
              `/${currentRole}/DriversList`,
              `/${currentRole}/verification`
            ].map((text, index) => (
              <MenuItem component={Link} key={text} to={text}>
                {menuText(text, currentRole)}
              </MenuItem>
            ))}
          </MenuList>
        ) : (
          <MenuList>
            {[
              `/${currentRole}/DriversList`,
              `/${currentRole}/verification`
            ].map((text, index) => (
              <MenuItem component={Link} key={text} to={text}>
                {menuText(text, currentRole)}
              </MenuItem>
            ))}
          </MenuList>
        )}
      </Drawer>
      {currentRole && currentRole === "Admin" ? (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route exact path={`/${currentRole}`} component={RegisterRoute} />
              <Route
                exact
                path={`/${currentRole}/register`}
                component={RegisterRoute}
              />
              <Route
                exact
                path={`/${currentRole}/registration_success`}
                component={RegistrationSuccess}
              />
              <Route
                exact
                path={`/${currentRole}/roles_and_permissions`}
                render={props => <RolesRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/officers_management`}
                render={props => <OfficersManagementRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/settings`}
                render={props => <EmailSettingsRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/DriversList`}
                render={props => <DriversListRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/verification`}
                render={props => <VehicleRoute {...props} />}
              />
            </Switch>
          </Suspense>
        </main>
      ) : (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route
                exact
                path={`/${currentRole}`}
                render={props => <VehicleRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/verification`}
                render={props => <VehicleRoute {...props} />}
              />
              <Route
                exact
                path={`/${currentRole}/DriversList`}
                render={props => <DriversListRoute {...props} />}
              />
              <Route
                path={`/${currentRole}/unauthorized`}
                component={unauthorized}
              />
              <Redirect from="*" to={`/${currentRole}/unauthorized`} />
            </Switch>
          </Suspense>
        </main>
      )}
    </div>
  );
}
