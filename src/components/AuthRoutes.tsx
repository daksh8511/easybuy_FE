import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

const AuthRoute = ({ children }: { children: ReactNode }) => {
  return localStorage.getItem("token")
    ? <Navigate to="/" replace />
    : <>{children}</>;
};

export default AuthRoute;