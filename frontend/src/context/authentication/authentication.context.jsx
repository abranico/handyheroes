import { createContext, useState } from "react";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(true);

  const handleLogin = () => {
    setUser(true);
  };

  return (
    <AuthenticationContext.Provider value={{ user, handleLogin }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
