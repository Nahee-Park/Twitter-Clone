import React from "react";
import Home from "routes/Home";
import Auth from "routes/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function AppRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Route exact path="/">
        {isLoggedIn ? <Home /> : <Auth />}
      </Route>
    </BrowserRouter>
  );
}

export default AppRouter;
