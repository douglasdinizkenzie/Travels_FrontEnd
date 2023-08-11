import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";

export const RegisterPage = () => {
  return (
    <>
      <div id="container-register-contents">
        <div className="container-sign-up-infos">
          <p>Sign In</p>
          <p>Start sharing your experiences!</p>
        </div>
        <FormControl className="container-form">
          <form>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Ex: Traveler" />
            <FormLabel>Email</FormLabel>
            <Input placeholder="Ex: traveler@gmail.com" />
            <FormLabel>CPF</FormLabel>
            <Input placeholder="000.000.000-00" />
            <FormLabel>Phone</FormLabel>
            <Input placeholder="(DDD) 90000-0000" />
            <FormLabel>Date of birth</FormLabel>
            <Input placeholder="00/00/00" />
            <FormLabel>Description</FormLabel>
            <Textarea placeholder="Your description" />
            <div className="container-state-city">
              <div>
                <FormLabel>State</FormLabel>
                <Input placeholder="Your State" />
              </div>
              <div>
                <FormLabel>City</FormLabel>
                <Input placeholder="Your City" />
              </div>
            </div>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="Your passoword" />
            <FormLabel>Confirm password</FormLabel>
            <Input placeholder="Confirm password" type="password" />
            <button className="green-button">
              Join <BsArrowRight />
            </button>
            <p className="link-to-register">
              Already have an account? <Link to={"/login"}>Click here!</Link>
            </p>
          </form>
        </FormControl>
      </div>
    </>
  );
};
