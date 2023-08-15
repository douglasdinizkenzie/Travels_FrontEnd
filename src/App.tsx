import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes/mainRoutes.routes";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <>
      <ChakraProvider>
        <ToastContainer autoClose={3000} />
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
