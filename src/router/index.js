import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import { Routes } from "./routes";

import { HomePage, NotFound, DetailPage } from "./../screens";

const RouterApp = (props) => {
  return (
    <Router>
      <Switch>
        {/* Login Route */}

        <Route exact path={Routes.home} element={<HomePage />} />
        <Route exact path={Routes.details} element={<DetailPage />} />

        {/* For unknow/non-defined path */}
        <Route exact path="*" element={<NotFound />} />
      </Switch>
    </Router>
  );
};

export default RouterApp;
