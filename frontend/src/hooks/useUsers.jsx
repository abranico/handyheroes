import { useState } from "react";
import {
  getAllUsers,
  getUserByUsername,
  userPartialUpdate,
} from "../services/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAll = () => {
    setLoading(true);
    setError(null);
    getAllUsers()
      .then((data) => setUsers(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const getByUsername = (username) => {
    setLoading(true);
    setError(null);
    getUserByUsername(username)
      .then((newUser) => setUsers(newUser[0]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const partialUpdate = (id, partialData) => {
    setLoading(true);
    setError(null);
    userPartialUpdate(id, partialData)
      .then((updatedUser) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => {
            return user.id === id ? { ...user, ...updatedUser } : user;
          })
        );
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { getByUsername, getAll, partialUpdate, users, error, loading };
};

export default useUsers;
