import "./styles.scss";
import { GiHamburgerMenu } from "react-icons/gi";

export const Header = () => {
  return (
    <div id="header">
      <p>Travels</p>
      <GiHamburgerMenu id="hamburguer" />
    </div>
  );
};
