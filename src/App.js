import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";
import Router from "./router";
import reducers from "./reducers";
import LoginForm from "./components/LoginForm";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDBYnauzWQHNWlp8M_S1wtFqKD5K90DeV0",
      authDomain: "spotted-55887.firebaseapp.com",
      databaseURL: "https://spotted-55887.firebaseio.com",
      projectId: "spotted-55887",
      storageBucket: "spotted-55887.appspot.com",
      messagingSenderId: "642125507513"
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
