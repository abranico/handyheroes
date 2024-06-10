import { createContext, useState } from "react";
import initialUsers from "../../mocks/Users.json";
export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(initialUsers);

  const handleLogin = (email, password) => {
    const userExist = users.some(
      (user) => user.email === email && user.password === password
    );

    if (!userExist) return;

    setUser(users.filter((user) => user.email === email)[0]);
    return true;
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleRegister = (newUser) => {
    setUsers(users.concat(newUser));
    setUser(newUser);
    return true;
  };

  return (
    <AuthenticationContext.Provider
      value={{ user, handleLogin, handleLogout, handleRegister }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
