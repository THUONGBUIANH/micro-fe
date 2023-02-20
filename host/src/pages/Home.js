import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Host APP</h1>
      <Container maxWidth="md">
        <Link to="/vue">App Vue</Link>
        <br />
        <Link to="/react">App React</Link>
      </Container>
    </Box>
  );
}
