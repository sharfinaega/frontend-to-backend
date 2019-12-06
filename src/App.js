import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// import './App.css';
import LoginPage from "./components/LoginPage";
import SignUp from "./components/RegisterForm";
import Dashboard from "./components/Dashboard";
// import ProfilePage from "./components/ProfilePage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
