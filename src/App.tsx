import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { MainRoutes } from "./routes/mainRoutes.routes";

function App() {
  return (
    <>
      <ToastContainer autoClose={3000} />
      <MainRoutes />
    </>
  );
}

export default App;
