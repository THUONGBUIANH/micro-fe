import React from "react";
import { Box, Container, Card, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <h1>Host</h1>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Card>
          <CardContent>
            <Link to="/react">App React</Link>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <Link to="/vue">App Vue</Link>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
