import { useNavigate } from "react-router-dom";
import { headerProps } from "../../interfaces/header/type";
import "./styles.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = ({ optionOne, optionTwo }: headerProps) => {
  const navigate = useNavigate();
  const redirect = (options: string) => {
    if (options == "Login") {
      navigate("/login");
    }
    if (options === "Sign Up") {
      navigate("/register");
    }
    if (options === "Main") {
      navigate("/");
    }

    return;
  };

  return (
    <div id="header">
      <p id="header-title">Travels</p>
      <GiHamburgerMenu id="hamburguer" />
      <div id="container-buttons">
        <p onClick={() => redirect(optionOne)}>{optionOne}</p>
        <div></div>
        <p onClick={() => redirect(optionTwo)}>{optionTwo}</p>
      </div>
    </div>
  );
};
