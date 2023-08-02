import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { BsArrowRight } from "react-icons/bs";

export const LoginContent = () => {
  return (
    <div id="container-login-contents">
      <div>
        <p>Login</p>
        <p>Start the jorney!</p>
      </div>
      <FormControl className="container-form">
        <form>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Ex: traveler@gmail.com" />
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Your password" />
          <button className="green-button">
            Travel <BsArrowRight />
          </button>
          <p className="link-to-register">
            Do not have an account yet?{" "}
            <Link to={"/register"}>Click here!</Link>
          </p>
        </form>
      </FormControl>
    </div>
  );
};
