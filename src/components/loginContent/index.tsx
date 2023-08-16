import {
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { Login } from "../../interfaces/login/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/login/schema";
import { useState, useContext } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../context/authContext";
import "../errorMessage/style.scss";
import "../buttons/styles.scss";

export const LoginContent = () => {
  const { isLoading, setIsLoading, loginUser } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({ resolver: zodResolver(loginSchema) });

  const [eyePassword, setEyePassword] = useState(false);
  const handleClickPassword = () => setEyePassword(!eyePassword);

  const handleSubmitData = (data: Login) => {
    setIsLoading(true);
    loginUser(data);
  };

  return (
    <div id="container-login-contents">
      <div>
        <p>Login</p>
        <p>Start the journey!</p>
      </div>
      <FormControl className="container-form">
        <form onSubmit={handleSubmit(handleSubmitData)}>
          <FormLabel>Email</FormLabel>
          <div className="input-container">
            <Input
              style={{
                borderColor: errors.password?.message
                  ? "#cd2a2a"
                  : "transparent",
              }}
              id="input-email"
              type="email"
              placeholder="Ex: traveler@gmail.com"
              {...register("email")}
            />
            <span
              className={`error-message ${
                errors.email?.message ? "visible" : ""
              }`}
            >
              {errors.email?.message} *
            </span>
          </div>

          <FormLabel>Password</FormLabel>
          <div className="input-container">
            <InputGroup display="flex" alignItems="center">
              <Input
                {...register("password")}
                id="input-password"
                style={{
                  borderColor: errors.password?.message
                    ? "#cd2a2a"
                    : "transparent",
                }}
                type={eyePassword ? "text" : "password"}
                placeholder="Your password"
                {...register("password")}
              />
              <InputRightElement h="70%">
                <button type="button" onClick={handleClickPassword}>
                  {eyePassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </InputRightElement>
            </InputGroup>
            <span
              className={`error-message ${
                errors.password?.message ? "visible" : ""
              }`}
            >
              {errors.password?.message} *
            </span>
          </div>

          <button
            style={{
              backgroundColor: isLoading ? "transparent" : "",
              border: isLoading ? "transparent" : "",
            }}
            type="submit"
            className="green-button"
          >
            {isLoading ? (
              <>
                <CircularProgress isIndeterminate color="green.300" />
              </>
            ) : (
              <>
                Join <BsArrowRight />
              </>
            )}
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
