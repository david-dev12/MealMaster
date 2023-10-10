import React from "react";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    }),
  })
);

function MainComponent({ open, children }) {
  return (
    <Main open={open}>
      <Box
        maxWidth={1200}
        margin="auto"
        paddingTop={10}
      >
        {children}
      </Box>
    </Main>
  );
}

export default MainComponent;
