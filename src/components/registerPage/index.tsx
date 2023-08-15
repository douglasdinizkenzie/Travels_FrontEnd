import {
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
import { userRequest } from "../../interfaces/user/types";
import "../errorMessage/style.scss";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { apiCep } from "../../service/api";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    setFocus,
    formState: { errors },
  } = useForm<userRequest>({
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
        console.log(cepInfosAPI);
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

  const handleSubmitData = (data: userRequest) => {
    console.log(data);
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
            <Input
              style={{
                borderColor: errors.name?.message ? "#cd2a2a" : "transparent",
              }}
              placeholder="Ex: Traveler"
              {...register("name")}
            />
            {errors.name?.message && (
              <span className={`error-message`}>{errors.name.message}</span>
            )}

            <FormLabel>Email</FormLabel>
            <Input
              style={{
                borderColor: errors.email?.message ? "#cd2a2a" : "transparent",
              }}
              placeholder="Ex: traveler@gmail.com"
              {...register("email")}
            />
            {errors.email?.message && (
              <span className={`error-message`}>{errors.email.message}</span>
            )}

            <FormLabel>CPF</FormLabel>
            <Input
              style={{
                borderColor: errors.cpf?.message ? "#cd2a2a" : "transparent",
              }}
              placeholder="000.000.000-00"
              {...register("cpf")}
            />
            {errors.cpf?.message && (
              <span className={`error-message`}>{errors.cpf.message}</span>
            )}

            <FormLabel>Phone</FormLabel>
            <Input
              style={{
                borderColor: errors.phone?.message ? "#cd2a2a" : "transparent",
              }}
              placeholder="(DDD) 90000-0000"
              {...register("phone")}
            />
            {errors.phone?.message && (
              <span className={`error-message`}>{errors.phone.message}</span>
            )}

            <FormLabel>Date of birth</FormLabel>
            <Input
              style={{
                borderColor: errors.date_of_birth?.message
                  ? "#cd2a2a"
                  : "transparent",
              }}
              type="date"
              placeholder="00/00/0000"
              {...register("date_of_birth")}
            />
            {errors.date_of_birth?.message && (
              <span className={`error-message`}>
                {errors.date_of_birth.message}
              </span>
            )}

            <FormLabel>Description</FormLabel>
            <Textarea
              style={{
                borderColor: errors.description?.message
                  ? "#cd2a2a"
                  : "transparent",
              }}
              placeholder="Your description"
              {...register("description")}
            />
            {errors.description?.message && (
              <span className={`error-message`}>
                {errors.description.message}
              </span>
            )}

            <FormLabel>CEP</FormLabel>
            <Input
              style={{
                borderColor: errors.cep?.message ? "#cd2a2a" : "transparent",
              }}
              placeholder="00000.000"
              {...register("cep")}
              onChange={findInfosCepAndSet}
            />
            {errors.cep?.message && (
              <span className={`error-message`}>{errors.cep.message}</span>
            )}

            <div className="container-state-city">
              <div>
                <FormLabel>State</FormLabel>
                <Input
                  style={{
                    borderColor: errors.state?.message
                      ? "#cd2a2a"
                      : "transparent",
                  }}
                  placeholder="Your State"
                  {...register("state")}
                />
                {errors.state?.message && (
                  <span className={`error-message`}>
                    {errors.state.message}
                  </span>
                )}
              </div>
              <div>
                <FormLabel>City</FormLabel>
                <Input
                  style={{
                    borderColor: errors.city?.message
                      ? "#cd2a2a"
                      : "transparent",
                  }}
                  placeholder="Your City"
                  {...register("city")}
                />
                {errors.city?.message && (
                  <span className={`error-message`}>{errors.city.message}</span>
                )}
              </div>
            </div>
            <FormLabel>Password</FormLabel>
            <InputGroup display="flex" alignItems="center">
              <Input
                style={{
                  borderColor: errors.password?.message
                    ? "#cd2a2a"
                    : "transparent",
                }}
                type={eyePassword ? "text" : "password"}
                placeholder="Your passoword"
                {...register("password")}
              />
              <InputRightElement h="85%">
                <button type="button" onClick={handleClickPassword}>
                  {eyePassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </InputRightElement>
            </InputGroup>
            {errors.password?.message && (
              <span className={`error-message`}>{errors.password.message}</span>
            )}

            <FormLabel>Confirm password</FormLabel>
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
              <InputRightElement h="85%">
                <button type="button" onClick={handleClickConfirmPassword}>
                  {eyeConfirmPassword ? (
                    <AiFillEye size={20} />
                  ) : (
                    <AiFillEyeInvisible size={20} />
                  )}
                </button>
              </InputRightElement>
            </InputGroup>
            {errors.confirmPassword?.message && (
              <span className={`error-message`}>
                {errors.confirmPassword.message}
              </span>
            )}
            <button type="submit" className="green-button">
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
