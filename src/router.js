import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SpotsList from "./components/SpotsList";
import SpotForm from "./components/SpotForm";

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={LoginForm} title="Login" initial />
          <Scene key="register" component={RegisterForm} title="register" />
        </Scene>
        <Scene key="main">
          <Scene
            key="spotsList"
            component={SpotsList}
            title="Spot List"
            rightTitle="+"
            onRight={() => {
              Actions.spotForm();
            }}
            initial
          />
          <Scene key="spotForm" component={SpotForm} title="Add a Spot" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
