import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/mainPage";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};
