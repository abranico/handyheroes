import { createContext } from "react";
// import initialUsers from "../../mocks/Users.json";
import useAuthentication from "../../hooks/useAuthentication";
import useUsers from "../../hooks/useUsers";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const {
    user,
    handleAuthenticate,
    loading: loadingAuthentication,
    logout,
  } = useAuthentication();

  const {
    users,
    userProfile,
    loading: loadingUsers,
    getByUsername,
  } = useUsers();

  const handleLogin = (email, password) => {
    handleAuthenticate({ email, password });
    return true;
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
        users,
        user,
        userProfile,
        handleLogin,
        handleLogout,
        handleRegister,
        getByUsername,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
