import { createContext } from "react";
// import initialUsers from "../../mocks/Users.json";
import useAuthentication from "../../hooks/useAuthentication";
import useUsers from "../../hooks/useUsers";
export const AuthenticationContext = createContext();

const USER = JSON.parse(localStorage.getItem("__user__"));

export const AuthenticationContextProvider = ({ children }) => {
  // const { users, addUser, loading } = useUsers();
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

  // const [user, setUser] = useState(USER);

  const handleLogin = (email, password) => {
    // const selectUser = users.find(
    //   (user) => user.email === email && user.password === password
    // );

    // if (!selectUser) return;

    // setUser(selectUser);
    // localStorage.setItem("__user__", JSON.stringify(selectUser));
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
