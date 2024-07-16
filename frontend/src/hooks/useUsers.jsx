import { useState } from "react";
import { getAllUsers, getUserByUsername } from "../services/users";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const getAll = () => {
    setError(null);
    getAllUsers()
      .then((data) =>
        setUsers(data.filter((user) => user.role === "professional"))
      )
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const getByUsername = (username) => {
    setError(null);
    getUserByUsername(username)
      .then((newUser) => setUsers(newUser[0]))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { getByUsername, getAll, users, error, loading };
};

export default useUsers;
