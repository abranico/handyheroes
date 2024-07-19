import { createContext } from "react";
import useAuthentication from "../../hooks/useAuthentication";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const { user, handleAuthenticate, loading, logout, error } =
    useAuthentication();

  const handleLogin = (email, password) => {
    handleAuthenticate({ email, password });
  };

  const handleLogout = () => {
    logout();
  };

  const handleRegister = (newUser) => {
    // addUser(newUser);
    // setUser(newUser);
    return true;
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
