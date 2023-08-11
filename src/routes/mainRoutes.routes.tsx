import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/mainPage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";
import { AuthProvider } from "../context/authContext";

export const MainRoutes = () => {
  return (
    <Routes>
      <AuthProvider>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </AuthProvider>
    </Routes>
  );
};
