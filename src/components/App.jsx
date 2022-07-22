import { CssBaseline } from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "../layout";
import Main from "./Main";
import React from "react";
import theme from "../styles";

function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <CssBaseline />
      <Layout />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
