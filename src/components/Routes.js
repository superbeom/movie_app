import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "../Routes/Main";
import TodoSecretary from "../Routes/TodoSecretary";
import GuessMyNumber from "../Routes/GuessMyNumber";
import FlipCard from "../Routes/FlipCard";
import AppAds from "../Routes/AppAds";
import HeungdoLabPolicy from "../Routes/HeungdoLabPolicy";
import NotFound from "../Routes/NotFound";

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/todosecretary" component={TodoSecretary} />
      <Route exact path="/guessmynumber" component={GuessMyNumber} />
      <Route exact path="/flipcard" component={FlipCard} />
      <Route exact path="/app-ads.txt" component={AppAds} />
      <Route exact path="/policy/heungdolab" component={HeungdoLabPolicy} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};
