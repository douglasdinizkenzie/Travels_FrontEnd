import { FormControl, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useForm } from "react-hook-form";
import { userSchema } from "../../schemas/user/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { userRequest } from "../../interfaces/user/types";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<userRequest>({
    resolver: zodResolver(userSchema),
  });

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
            <Input placeholder="Ex: Traveler" {...register("name")} />
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Ex: traveler@gmail.com"
              {...register("email")}
            />
            <FormLabel>CPF</FormLabel>
            <Input placeholder="000.000.000-00" {...register("cpf")} />
            <FormLabel>Phone</FormLabel>
            <Input placeholder="(DDD) 90000-0000" {...register("phone")} />
            <FormLabel>Date of birth</FormLabel>
            <Input
              type="date"
              placeholder="00/00/0000"
              {...register("date_of_birth")}
            />
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Your description"
              {...register("description")}
            />
            <FormLabel>CEP</FormLabel>
            <Input placeholder="00000.000" {...register("cep")} />
            <div className="container-state-city">
              <div>
                <FormLabel>State</FormLabel>
                <Input placeholder="Your State" {...register("state")} />
              </div>
              <div>
                <FormLabel>City</FormLabel>
                <Input placeholder="Your City" {...register("city")} />
              </div>
            </div>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Your passoword"
              {...register("password")}
            />
            <FormLabel>Confirm password</FormLabel>
            <Input
              placeholder="Confirm password"
              type="password"
              {...register("confirmPassword")}
            />
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
