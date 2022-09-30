import React, { useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";

function App() {
  const auth = fbase.auth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AppRouter isLoggedIn={isLoggedIn} />;
}

export default App;
