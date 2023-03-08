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
        {" "}
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="wrap"
        >
          <h1>여기 까지 왔는데 로그인이나 한번 해보슈</h1>
          <h1>너 밑에 버튼 솔직하게 누르고 싶잖아</h1>

          <Button onClick={googleOnClick}>Continue with Google</Button>
          <h1>사실 로그인 안했을때 페이지는 귀찮아서 아직 안 꾸몄어.</h1>
          <h1>들어가면 좀 간지나는 화면 있으니까 그냥 로그인 ㄱㄱ</h1>
          <h1>이렇게까지 부탁했는데도 안해? 진짜 독하다 독해~</h1>

          <h1>이거 그냥 구글 계정으로 로그인 하는거라 1초도 안 걸림</h1>
          <h1>1초 더 걸리면... 내가 너를 위해...</h1>
          <h1>너를 위해... 너를 위해... 너를 위해...</h1>
          <h4>걍 컴 문제니까 컴을 바꾸셈 ㅋ</h4>

          <h1>이제 로그인 해야지</h1>
        </Flex>
      </Flex>
      {/* <Button onClick={logout}>logout</Button> */}
    </>
  );
};

export default Login;
