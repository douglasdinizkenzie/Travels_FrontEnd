import {
  CircularProgress,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { userSchemaRequest } from "../../schemas/user/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserRequest } from "../../interfaces/user/types";
import "../errorMessage/style.scss";
import { useContext, useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { apiCep } from "../../service/api";
import {
  normalizePhoneNumber,
  normalizeCepNumber,
  normalizeCpfNumber,
} from "./masks/mask";
import { AuthContext } from "../../context/authContext";

export const RegisterPage = () => {
  const { createUser, isLoading, setIsLoading } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    watch,
    formState: { errors },
  } = useForm<UserRequest>({
    mode: "all",
    resolver: zodResolver(userSchemaRequest),
  });

  const [eyePassword, setEyePassword] = useState(false);
  const [eyeConfirmPassword, setConfirmPassword] = useState(false);
  const handleClickPassword = () => setEyePassword(!eyePassword);
  const handleClickConfirmPassword = () =>
    setConfirmPassword(!eyeConfirmPassword);

  const findInfosCepAndSet = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const cep: string = event.target.value.replace(/[^0-9]/gi, "");
    if (cep.length == 8) {
      try {
        const cepInfosAPI = await apiCep.get(`/${cep}/json/`);
        if (cepInfosAPI) {
          setValue("state", cepInfosAPI.data.uf),
            setValue("city", cepInfosAPI.data.localidade),
            setFocus("password");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const phoneValue = watch("phone");
  const cepValue = watch("cep");
  const cpfValue = watch("cpf");

  useEffect(() => {
    setValue("phone", normalizePhoneNumber(phoneValue));
  }, [phoneValue]);

  useEffect(() => {
    setValue("cep", normalizeCepNumber(cepValue));
  }, [cepValue]);

  useEffect(() => {
    setValue("cpf", normalizeCpfNumber(cpfValue));
  }, [cpfValue]);

  const handleSubmitData = (data: UserRequest) => {
    setIsLoading(true);
    createUser(data);
  };

  return (
    <>
      <div id="container-register-contents">
        <div className="container-sign-up-infos">
          <p>Sign In</p>
          <p>Start sharing your experiences!</p>
        </div>
        <FormControl className="container-form">
          <form onSubmit={handleSubmit(handleSubmitData)}>
            <FormLabel>Name</FormLabel>
            <div className="input-container">
              <Input
                id="input-name"
                style={{
                  borderColor: errors.name?.message ? "#cd2a2a" : "transparent",
                }}
                placeholder="Ex: Traveler"
                {...register("name")}
              />
              <span
                className={`error-message ${
                  errors.name?.message ? "visible" : ""
                }`}
              >
                {errors.name?.message} *
              </span>
            </div>

            <FormLabel>Email</FormLabel>
            <div className="input-container">
              <Input
                id="input-email"
                style={{
                  borderColor: errors.email?.message
                    ? "#cd2a2a"
                    : "transparent",
                }}
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

            <FormLabel>CPF</FormLabel>
            <div className="input-container">
              <Input
                id="input-cpf"
                style={{
                  borderColor: errors.cpf?.message ? "#cd2a2a" : "transparent",
                }}
                {...register("cpf", { required: true })}
                placeholder="000.000.000-00"
              />
              <span
                className={`error-message ${
                  errors.cpf?.message ? "visible" : ""
                }`}
              >
                {errors.cpf?.message} *
              </span>
            </div>

            <FormLabel>Phone</FormLabel>
            <div className="input-container">
              <Input
                id="input-phone"
                type="phone"
                style={{
                  borderColor: errors.phone?.message
                    ? "#cd2a2a"
                    : "transparent",
                }}
                placeholder="(DDD) 90000-0000"
                {...register("phone", { required: true })}
              />
              <span
                className={`error-message ${
                  errors.phone?.message ? "visible" : ""
                }`}
              >
                {errors.phone?.message} *
              </span>
            </div>

            <FormLabel>Date of birth</FormLabel>
            <div className="input-container">
              <Input
                id="input-date_of_birth"
                style={{
                  borderColor: errors.date_of_birth?.message
                    ? "#cd2a2a"
                    : "transparent",
                }}
                type="date"
                placeholder="00/00/0000"
                {...register("date_of_birth")}
              />
              <span
                className={`error-message ${
                  errors.date_of_birth?.message ? "visible" : ""
                }`}
              >
                {errors.date_of_birth?.message} *
              </span>
            </div>

            <FormLabel>Description</FormLabel>
            <Textarea
              id="textarea-description"
              style={{
                borderColor: errors.description?.message
                  ? "#cd2a2a"
                  : "transparent",
              }}
              placeholder="Your description"
              {...register("description")}
            />
            <span
              className={`error-message ${
                errors.description?.message ? "visible" : ""
              }`}
            >
              {errors.description?.message} *
            </span>

            <FormLabel>CEP</FormLabel>
            <div className="input-container">
              <Input
                id="input-cep"
                style={{
                  borderColor: errors.cep?.message ? "#cd2a2a" : "transparent",
                }}
                placeholder="00000.000"
                {...register("cep", { required: true })}
                onChange={findInfosCepAndSet}
              />
              <span
                className={`error-message ${
                  errors.cep?.message ? "visible" : ""
                }`}
              >
                {errors.cep?.message} *
              </span>
            </div>

            <div className="container-state-city">
              <div>
                <FormLabel>State</FormLabel>
                <div className="input-container">
                  <Input
                    id="input-state"
                    isReadOnly
                    style={{
                      borderColor: errors.state?.message
                        ? "#cd2a2a"
                        : "transparent",
                    }}
                    placeholder="Your State"
                    {...register("state")}
                  />
                  <span
                    className={`error-message ${
                      errors.state?.message ? "visible" : ""
                    }`}
                  >
                    {errors.state?.message} *
                  </span>
                </div>
              </div>
              <div>
                <FormLabel>City</FormLabel>
                <div className="input-container">
                  <Input
                    id="input-city"
                    isReadOnly
                    style={{
                      borderColor: errors.city?.message
                        ? "#cd2a2a"
                        : "transparent",
                    }}
                    placeholder="Your City"
                    {...register("city")}
                  />
                  <span
                    className={`error-message ${
                      errors.city?.message ? "visible" : ""
                    }`}
                  >
                    {errors.city?.message} *
                  </span>
                </div>
              </div>
            </div>

            <FormLabel>Password</FormLabel>
            <div className="input-container">
              <InputGroup display="flex" alignItems="center">
                <Input
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

            <FormLabel>Confirm password</FormLabel>
            <div className="input-container">
              <InputGroup>
                <Input
                  style={{
                    borderColor: errors.confirmPassword?.message
                      ? "#cd2a2a"
                      : "transparent",
                  }}
                  placeholder="Confirm password"
                  type={eyeConfirmPassword ? "text" : "password"}
                  {...register("confirmPassword")}
                />
                <InputRightElement h="70%">
                  <button type="button" onClick={handleClickConfirmPassword}>
                    {eyeConfirmPassword ? (
                      <AiFillEye size={20} />
                    ) : (
                      <AiFillEyeInvisible size={20} />
                    )}
                  </button>
                </InputRightElement>
              </InputGroup>
              <span
                className={`error-message ${
                  errors.confirmPassword?.message ? "visible" : ""
                }`}
              >
                {errors.confirmPassword?.message} *
              </span>
            </div>

            <button
              type="submit"
              className="green-button"
              style={{
                backgroundColor: isLoading ? "transparent" : "",
                border: isLoading ? "none" : "",
              }}
            >
              {isLoading ? (
                <CircularProgress isIndeterminate color="green.300" />
              ) : (
                <>
                  Join <BsArrowRight />
                </>
              )}
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
