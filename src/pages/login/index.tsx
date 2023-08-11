import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { LoginContent } from "../../components/loginContent";
import "./styles.scss";

export const Login = () => {
  return (
    <>
      <div id="container-img-login">
        <Header optionOne="Main" optionTwo="Sign Up" logo="Main" />
        <LoginContent />
      </div>
      <Footer />
    </>
  );
};
