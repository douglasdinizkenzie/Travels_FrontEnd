import { createContext } from "react";
import { authProviderData, props } from "./interfaces";

export const AuthContext = createContext<authProviderData>(
  {} as authProviderData
);

export const AuthProvider = ({ children }: props) => {
  return <AuthContext.Provider value={{}}>{children} </AuthContext.Provider>;
};
