import { AppRoutes } from "./routes";
import { GlobalStyes, Theme } from "./themes";

export const App = () => {
  return (
    <Theme>
      <GlobalStyes />
      <AppRoutes />
    </Theme>
  );
};
