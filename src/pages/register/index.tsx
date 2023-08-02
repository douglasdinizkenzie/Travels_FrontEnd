import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { RegisterPage } from "../../components/registerPage";
import "./styles.scss";

export const Register = () => {
  return (
    <>
      <div id="container-img-signIn">
        <Header optionOne="Main" optionTwo="Login" />
        <RegisterPage />
      </div>
      <Footer />
    </>
  );
};
