import React from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbase";
function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(authService.currentUser);
  console.log(isLoggedIn);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
