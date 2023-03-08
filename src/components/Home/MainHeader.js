import { Button, Header, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { auth } from "../../fbase";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";

function MainHeader({ isLoggedIn, userObj }) {
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const [displayName, setDisplayName] = useState("");

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
    <Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
      height={60}
      p="xs"
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src={"https://cdn-icons-png.flaticon.com/512/1985/1985500.png"}
          alt="Logo"
          width={40}
          height={40}
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }} /* Add a pointer cursor on hover */
        />
        <div
          style={{
            marginLeft: "16px",
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "24px",
            cursor: "pointer" /* Add a pointer cursor on hover */,
          }}
          onClick={() => navigate("/")}
        >
          {"Python AI Teacher"}
        </div>
      </div>
      {isLoggedIn ? (
        <>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            {userObj.displayName}님 환영합니다!{" "}
          </span>
          <Button onClick={logout}>logout</Button>
        </>
      ) : (
        <>
          <span
            style={{
              marginLeft: "auto",
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            로그인 필수입니다!!
          </span>
          <Button onClick={googleOnClick}>1초만에 로그인 하기</Button>
        </>
      )}

      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/2048px-VisualEditor_-_Icon_-_Menu.svg.png"
        alt="Page Icon"
        width={24}
        height={24}
        onClick={() => navigate("/login")}
        style={{ cursor: "pointer" }} /* Add a pointer cursor on hover */
      />
    </Header>
  );
}

export default MainHeader;
