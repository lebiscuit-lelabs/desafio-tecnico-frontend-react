import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../config/ReactotronConfig";

import "react-toastify/dist/ReactToastify.css";
import Home from "../pages/Home/Home.jsx";
import store from "../store/index";

const Routes = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </Provider>
);

export default Routes;
