import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Routes/Main";
import HeungdoLabPolicy from "../Routes/HeungdoLabPolicy";
import NotFound from "../Routes/NotFound";

export default () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/policy/heungdolab" component={HeungdoLabPolicy} />
    <Route path="*" component={NotFound} />
  </Switch>
);
