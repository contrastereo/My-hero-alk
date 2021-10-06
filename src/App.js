//Dependencies
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./pages/routing/ProtectedRoute";
//Components
import Home from "./pages/Home";
import LoginForm from "./pages/Login";
import Search from "./pages/Search";
import WebNav from "./components/WebNav";
import { CharProvider } from "./context/CharacterContext";
//CSS and Bootstrap
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";

const App = () => {
  const isAuth = window.localStorage.getItem("token") ? true : false;
  return (
    <div>
      <CharProvider>
        {/* context wrapper */}
        <Router>
          <WebNav />
          <Container className="bg-light min-vh-100">
            <Switch>
              <Route path="/login" component={LoginForm} />

              <ProtectedRoute path="/" exact component={Home} isAuth={isAuth} />
              <ProtectedRoute
                path="/search"
                component={Search}
                isAuth={isAuth}
              />
            </Switch>
          </Container>
        </Router>
        {/* end of context wrapper */}
      </CharProvider>
    </div>
  );
};

export default App;
