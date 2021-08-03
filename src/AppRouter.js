import React from "react";
import Home from "./routes/Home";
import Auth from "./routes/Auth";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(False);
  return (
    <BrowserRouter>
      <Route exact path="/">
        {isLoggedIn ? <Home /> : <Auth />}
      </Route>
    </BrowserRouter>
  );
}

export default AppRouter;
