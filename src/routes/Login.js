import React from "react";
import { Grid, Flex, Button } from "@mantine/core";
import { app } from "../fbase";
import { useNavigate } from "react-router-dom";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "../fbase";
import { useState } from "react";
// 초기 화면
const Login = () => {
  const [displayName, setDisplayName] = useState("");
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const logout = () => {
    auth.signOut();
    alert("로그아웃 되었습니다.");
    navigate("/");
  };

  const googleOnClick = function () {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        setDisplayName(user.displayName);
        navigate("/");

        console.log(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <>
      <Flex
        gap="md"
        justify="center"
        align="center"
        direction="row"
        wrap="wrap"
      >
        this is login page
      </Flex>
      <div>{displayName}</div>
      <Button onClick={googleOnClick}>Continue with Google</Button>
      <Button onClick={logout}>logout</Button>
    </>
  );
};

export default Login;
