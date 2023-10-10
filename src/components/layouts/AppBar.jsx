import React from "react";
import { styled } from "@mui/material/styles";
import { AppBar as MuiAppBar, Toolbar, IconButton } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import KitchenIcon from "@mui/icons-material/Kitchen";
import BrandLogo from "../../assets/mealmaster-high-resolution-logo-color-on-transparent-background.png";
import MealListModal from "./MealListModal";
import { Link } from "react-router-dom";
const drawerWidth = 300;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginRight: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function AppBarComponent({
  open,
  handleDrawerOpen,
  handleOpen,
  handleClose,
  modalOpen,
}) {
  return (
    <>
      <AppBar
        position="fixed"
        open={open}
      >
        <Toolbar>
          <Link to="/">
            <img
              src={BrandLogo}
              alt="MealMaker"
              style={{ maxWidth: "200px" }}
            />
          </Link>
          <div style={{ flexGrow: 1 }} />
          <IconButton
            color="inherit"
            edge="start"
            sx={{ mr: 2 }}
            onClick={handleOpen}
          >
            <RestaurantIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <KitchenIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MealListModal
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalOpen={modalOpen}
      />
    </>
  );
}

export default AppBarComponent;
