import { createContext, useState } from "react";
import { authProviderData, props } from "./interfaces";
import { UserRequest } from "../../interfaces/user/types";
import { api } from "../../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Login } from "../../interfaces/login/types";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);

export const AuthProvider = ({ children }: props) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const createUser = async (data: UserRequest) => {
    const { cep, state, city, ...userInfos } = data;
    const addressInfos = { cep, state, city };
    try {
      const responseUser = await api.post("/users", userInfos);
      const responseAddress = await api.post(
        `/address/${responseUser.data.uuid}`,
        addressInfos
      );
      if (responseAddress) {
        toast.success("Conta criada!");
        navigate("/login");
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado. Tente novamente");
      setIsLoading(false);
    }
  };

  const loginUser = async (data: Login) => {
    try {
      const responseLogin = await api.post("/login", data);

      if (responseLogin) {
        localStorage.setItem("@TOKEN-TRAVELS", responseLogin.data.token);
        setIsLoading(false);
        toast.success("Seja bem vindo!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Ops, alguma coisa deu errado. Tente novamente");
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{ createUser, isLoading, setIsLoading, loginUser }}
    >
      {children}{" "}
    </AuthContext.Provider>
  );
};
