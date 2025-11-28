import { Outlet, Navigate } from "react-router-dom";
import { usePrivy } from "@privy-io/react-auth";

const ProtectedRoute = () => {
  const { authenticated } = usePrivy();
  //   if (!authenticated) return <Navigate to="/" replace />;
  return <Outlet />;
};

export default ProtectedRoute;
