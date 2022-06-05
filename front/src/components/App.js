import { CssBaseline, Container, ThemeProvider } from "@mui/material";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Main from "./Main";
import Layout from "../layout"
import theme from "../styles";



function App() {
  return (
        <>
        
        <ThemeProvider theme={theme.light}>
        <CssBaseline />
        <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
          </Switch>
        </Router>
        </Container>
        </ThemeProvider>

        </>
  );
}

export default App;
