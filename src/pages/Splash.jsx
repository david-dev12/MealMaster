import React from "react";
import Logo from "../assets/logo-no-background.png";
import { Container, Box } from "@mui/material";

function Splash() {
  return (
    <Container
      maxWidth="sm"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxWidth: "100vw",
        backgroundColor: "rgb(124, 78, 41)",
      }}
    >
      <Box
        p={4}
        maxWidth={450}
      >
        <img
          src={Logo}
          alt="Logo"
          width="100%"
        />
      </Box>
    </Container>
  );
}

export default Splash;
