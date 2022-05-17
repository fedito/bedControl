import { ThemeProvider } from "@emotion/react";
import {
  Container,
  createTheme,
  CssBaseline,
  Link,
  Typography,
} from "@mui/material";
import Layout from "../components/Layout";
import { AuthContextProvider } from "../store/auth-context";
import "../styles/globals.css";
import * as React from "react";
import PropTypes from "prop-types";
import { UserProvider } from "../store/userContext";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        BedControl
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function MyApp(props) {
  const { Component, pageProps } = props;

  const theme = createTheme();

  return (
    <AuthContextProvider>
      <UserProvider>
        <Layout>
          <Container component="main">
            <ThemeProvider theme={theme}>
              <CssBaseline />

              <Component {...pageProps} />
              <Copyright sx={{ mt: 8, mb: 4 }} />
            </ThemeProvider>
          </Container>
        </Layout>
      </UserProvider>
    </AuthContextProvider>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
