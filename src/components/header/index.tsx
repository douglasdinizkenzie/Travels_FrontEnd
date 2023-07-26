import { headerProps } from "../../interfaces/header/type";
import "./styles.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = ({ optionOne, optionTwo }: headerProps) => {
  return (
    <div id="header">
      <p id="header-title">Travels</p>
      <GiHamburgerMenu id="hamburguer" />
      <div id="container-buttons">
        <p>{optionOne}</p>
        <div></div>
        <p>{optionTwo}</p>
      </div>
    </div>
  );
};
