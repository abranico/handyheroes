import { createContext } from "react";
import useAuthentication from "../../hooks/useAuthentication";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const {
    user,
    handleAuthenticate,
    handleRegister: register,
    loading,
    logout,
    error,
  } = useAuthentication();

  const handleLogin = (email, password) => {
    return handleAuthenticate({ email, password });
  };

  const handleLogout = () => {
    logout();
  };

  const handleRegister = (newUser) => {
    return register(newUser);
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        handleLogin,
        handleLogout,
        handleRegister,
        error,
      }}
    >
      {!loading && children}
    </AuthenticationContext.Provider>
  );
};
