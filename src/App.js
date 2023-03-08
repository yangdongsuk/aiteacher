import "./App.css";
import { MantineProvider, AppShell, Header } from "@mantine/core";

import AppRouter from "./components/Router";
import MainHeader from "./components/Home/MainHeader";
import { useState, useEffect } from "react";
import { auth } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObj(user);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} userObj={userObj} />
      ) : (
        "Initializing..."
      )}
    </MantineProvider>
  );
}

export default App;
