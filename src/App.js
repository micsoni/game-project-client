import React from "react";
import store from "./store/index";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import "./App.css";
import Homepage from "./components/Homepage";
import SignupFormContainer from "./components/SignupFormContainer";

function App() {
  return (
    <Provider store={store}>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={SignupFormContainer} />
    </Provider>
  );
}

export default App;
