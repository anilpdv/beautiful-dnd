import { Route, Switch } from "react-router-dom";
import TournamentInfo from "./components/TournamentInfo";
import PoolManagement from "./components/PoolManagement";
import React from "react";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={TournamentInfo}></Route>
      <Route path="/PoolManagement" component={PoolManagement}></Route>
    </Switch>
  );
};

export default Routes;
