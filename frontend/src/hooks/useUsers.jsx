import { fetchAddUser, fetchAllUsers } from "../services/users";
import { useState, useEffect } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("chauuuu");
    setError(null);
    setLoading(true);
    fetchAllUsers()
      .then((data) => setUsers(data))
      .catch((e) => {
        console.error(e.message);
        setError({ error: e.message });
      })
      .finally(() => setLoading(false));
  }, []);

  const addUser = (user) => {
    setError(null);
    setLoading(true);
    fetchAddUser(user)
      .then((newUser) => setUsers((prevUsers) => prevUsers.concat(newUser)))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return { users, error, loading, addUser };
};

export default useUsers;
