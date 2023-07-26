import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { MainContent } from "../../components/mainContent";
import "./style.scss";

export const MainPage = () => {
  return (
    <>
      <div id="container-img">
        <Header optionOne={"Login"} optionTwo={"SignIn"} />
        <MainContent />
      </div>
      <Footer />
    </>
  );
};
