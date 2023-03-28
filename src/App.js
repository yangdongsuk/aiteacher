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
        // setIsLoggedIn(false);
        //임시로 로그인 안해도 guest로 자동 로그인되도록 설정
        setIsLoggedIn(true);
        setUserObj({ displayName: "guest" });
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
