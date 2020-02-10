import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Converter from '../pages/converter';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/converter" component={Converter} />
    </Switch>
  );
}
