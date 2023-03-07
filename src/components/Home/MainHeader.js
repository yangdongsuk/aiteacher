import { Header, Image } from "@mantine/core";
import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();

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
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/VisualEditor_-_Icon_-_Menu.svg/2048px-VisualEditor_-_Icon_-_Menu.svg.png"
        alt="Page Icon"
        width={24}
        height={24}
      />
    </Header>
  );
}

export default MainHeader;
