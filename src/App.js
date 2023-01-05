import React from "react";
import Login from "./components/auth/login";
import AllJobPage from "./components/allJobPage";
import BaseLayout from "./baseLayout";
import HomePage from "./components/homepage";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <BaseLayout>
          <HomePage />
        </BaseLayout>
      </Route>

      <Route path="/login">
        <BaseLayout>
          <Login />
        </BaseLayout>
      </Route>

      <Route path="/all">
        <BaseLayout>
          <AllJobPage />
        </BaseLayout>
      </Route>

      <Redirect to="/" />
    </Switch>
  );
};

export default App;
