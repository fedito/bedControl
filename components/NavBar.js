import { Fragment, useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  Button,
} from "@mui/material";
import swal from "sweetalert";

function NavBar(props) {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const [logout, setLogout] = useState(false);
  const [drawer, setDrawer] = useState(false);

  const handleLogout = () => {
    setLogout(false);
    auth.logout();

    swal({
      title: `Usuario desconectado`,
      timer: "2000",
      icon: "warning",
    });

    router.push("/");
  };

  const toggleDrawer = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(state);
  };

  const toggleLogout = (state) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setLogout(state);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {auth.isLoggedIn && (
          <Fragment>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: "auto" }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  <ListItem key={"list1"} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        console.log("CLICK");
                      }}
                    >
                      <ListItemIcon>
                        <AccountCircle />
                      </ListItemIcon>
                      <ListItemText primary={"Hola"} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
            {/* {router.pathname.substring(0, 10) != "/hospitals" && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => router.back()}
              >
                <ArrowBackIosNewRoundedIcon />
              </IconButton>
            )} */}
          </Fragment>
        )}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Control de Camas
        </Typography>
        {auth.isLoggedIn && (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleLogout(true)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Drawer
              anchor={"right"}
              open={logout}
              onClose={toggleLogout(false)}
            >
              <Box
                sx={{ width: "auto" }}
                role="presentation"
                onClick={toggleLogout(false)}
                onKeyDown={toggleLogout(false)}
              >
                <List>
                  <ListItem key={"list1"} disablePadding>
                    <ListItemButton
                      onClick={handleLogout}
                    >
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary={"Desconectarse"} />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
