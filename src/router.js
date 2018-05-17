import React from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import SpotsList from "./components/SpotsList";
import SpotView from "./components/SpotView";
import SpotCreate from "./components/SpotCreate";

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
              Actions.spotCreate();
            }}
            initial
          />
          <Scene key="spotView" component={SpotView} title="Da Spot" />
          <Scene key="spotCreate" component={SpotCreate} title="Add a Spot" />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
