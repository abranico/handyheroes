import { useEffect, useState } from "react";
import {
  getAllUsers,
  getUserByUsername,
  userPartialUpdate,
  createUser,
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

  useEffect(() => {
    getAll();
  }, []);

  // const getByUsername = (username) => {
  //   setLoading(true);
  //   setError(null);
  //   getUserByUsername(username)
  //     .then((newUser) => setUsers(newUser[0]))
  //     .catch((error) => setError(error))
  //     .finally(() => setLoading(false));
  // };

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

  return { partialUpdate, addUser, getAll, users, error, loading };
};

export default useUsers;
