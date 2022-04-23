import { AppRoutes } from "./routes";
import { Theme } from "./themes";

export const App = () => {
  return (
    <Theme>
      <AppRoutes />
    </Theme>
  );
};
