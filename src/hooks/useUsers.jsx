import {
  getAllUsers,
  deleteUser,
  userPartialUpdate,
  createUser,
} from "../services/local/users"; // local/server
import { useEffect, useState } from "react";

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

  useEffect(() => {
    getAll();
  }, []);

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

  const addUser = (newUser) => {
    setLoading(true);
    setError(null);
    createUser(newUser)
      .then((user) => {
        setUsers((prevUsers) => prevUsers.concat(user));
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const removeUser = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const check = await deleteUser(id);
      if (check)
        return setUsers((prevRevies) =>
          prevRevies.filter((review) => review.id !== id)
        );
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { partialUpdate, addUser, removeUser, getAll, users, error, loading };
};

export default useUsers;
