import React from "react";
import Home from "routes/Home";
import Auth from "routes/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./Nav";
import Profile from "routes/Profile";

function AppRouter({ isLoggedIn, userObj }) {
  return (
    <BrowserRouter>
      {isLoggedIn && <Nav />}
      <Switch>
        {isLoggedIn ? (
          <div>
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
          </div>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
