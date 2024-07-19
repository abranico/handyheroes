import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../context/authentication/authentication.context";
import { Navbar } from "../components";

const Protected = ({ children, type }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) return <Navigate to="/" replace />;

  if (type == "admin" && user.role != "admin")
    return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Protected;
