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
    error,
  } = useAuthentication();

  const {
    users,
    userProfile,
    loading: loadingUsers,
    getByUsername,
    partialUpdate,
  } = useUsers();

  const handleLogin = (email, password) => {
    handleAuthenticate({ email, password });
    if (error) console.log({ asdafsdf: error });
  };

  const handleLogout = () => {
    logout();
  };

  const handleUpdate = (id, data) => {
    partialUpdate(id, data);
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
        handleUpdate,
        error,
      }}
    >
      {!loadingAuthentication && children}
    </AuthenticationContext.Provider>
  );
};
