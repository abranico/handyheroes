import { useAuth } from "@/context/auth.context";
import { Navigate } from "react-router-dom";

interface ProtectedProps {
  children: React.ReactNode;
  type?: string;
}

export default function Protected({ children, type }: ProtectedProps) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // if (type == "admin" && user.role != "admin")
  //   return <Navigate to="/" replace />;

  return children;
}
