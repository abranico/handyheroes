import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../context/authentication/authentication.context";
import { Navbar } from "../components";
const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) return <Navigate to="/login" replace />;
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Protected;
