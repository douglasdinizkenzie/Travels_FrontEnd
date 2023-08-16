import { ReactNode } from "react";
import { UserRequest } from "../../interfaces/user/types";
import { Login } from "../../interfaces/login/types";

export interface authProviderData {
  createUser: (data: UserRequest) => Promise<void>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  loginUser: (data: Login) => Promise<void>;
}

export interface props {
  children: ReactNode;
}
