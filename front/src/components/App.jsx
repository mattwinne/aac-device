import { CssBaseline, ThemeProvider, Container } from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import Layout from "../layout";
import Main from "./Main";
import theme from "../styles";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <CssBaseline />
      <Layout/>
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
