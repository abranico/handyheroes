import { createContext } from "react";
import useUsers from "../../hooks/useUsers";

export const UsersContext = createContext();

export const UsersContextProvider = ({ children }) => {
  const { users, loading, error, partialUpdate, addUser } = useUsers();

  const handleUpdate = (id, data) => {
    partialUpdate(id, data);
  };

  const handleAddUser = (newUser) => {
    addUser(newUser);
  };

  return (
    <UsersContext.Provider
      value={{
        users,
        loading,
        error,
        handleUpdate,
        handleAddUser,
      }}
    >
      {!loading && children}
    </UsersContext.Provider>
  );
};
