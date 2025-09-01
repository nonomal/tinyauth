import { Navigate } from "react-router";
import { useUserContext } from "./context/user-context";

export const App = () => {
  const { isLoggedIn } = useUserContext();

  if (isLoggedIn) {
    return <Navigate to="/logout" replace />;
  }

  return <Navigate to="/login" replace />;
};
