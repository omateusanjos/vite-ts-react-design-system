import Button from "../Button";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const navigate = useNavigate();
  const style = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "#000",
    color: "#fff",
    width: "100%",
  };
  return (
    <div className="menu" style={style}>
      <div className="menu__buttons">
        <Button onClick={() => console.log("teste")}>teste</Button>
        <Button asChild>
          <a href="/" onClick={() => navigate("/")}>
            Home
          </a>
        </Button>
      </div>
    </div>
  );
};
