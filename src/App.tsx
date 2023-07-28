import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes/mainRoutes.routes";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <ToastContainer autoClose={3000} />
        <MainRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
