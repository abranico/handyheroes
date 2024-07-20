import { useState } from "react";
import { login, register } from "../services/authentication";
import useUsers from "./useUsers";

const useAuthentication = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("__user__");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { addUser } = useUsers();

  const handleAuthenticate = (request) => {
    setError(null);
    setLoading(true);
    return login(request)
      .then((newUser) => {
        localStorage.setItem("__user__", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const handleRegister = (newUser) => {
    setError(null);
    setLoading(true);
    return register(newUser)
      .then((newUser) => {
        addUser(newUser);
        return newUser;
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setLoading(false));
  };

  const logout = () => {
    localStorage.removeItem("__user__");
    setUser(null);
  };

  return { user, error, loading, handleAuthenticate, handleRegister, logout };
};

export default useAuthentication;
