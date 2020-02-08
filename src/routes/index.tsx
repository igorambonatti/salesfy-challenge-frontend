import React from "react";

import { Switch, Route } from "react-router-dom";

import Home from "../pages/home/";
import Converter from "../pages/converter/";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/converter" component={Converter} />
    </Switch>
  );
};

export default Routes;
