import "../buttons/styles.scss";
import "./styles.scss";
import { BsArrowRight } from "react-icons/bs";

export const MainContent = () => {
  return (
    <div id="container-main-content">
      <h1>Travels</h1>
      <p>
        Travel is more than a destination – it's about the stories we share.
      </p>
      <button className="green-button">
        Join <BsArrowRight />
      </button>
    </div>
  );
};
