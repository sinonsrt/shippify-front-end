import { AppRoutes } from "./routes";
import { GlobalStyes, Theme } from "./themes";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
  return (
    <Theme>
      <GlobalStyes />
      <AppRoutes />
      <ToastContainer />
    </Theme>
  );
};
