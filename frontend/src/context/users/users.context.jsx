import { createContext } from "react";
import useUsers from "../../hooks/useUsers";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const { users, loading, error, getByUsername, partialUpdate } = useUsers();

  const handleUpdate = (id, data) => {
    partialUpdate(id, data);
  };

  return (
    <UsersContext.Provider
      value={{ users, loading, error, handleUpdate, getByUsername }}
    >
      {children}
    </UsersContext.Provider>
  );
};
