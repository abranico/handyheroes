import { useState } from "react";
import { login } from "../services/authentication";

const useAuthentication = () => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("__user__");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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

  const logout = () => {
    localStorage.removeItem("__user__");
    setUser(null);
  };

  return { user, error, loading, handleAuthenticate, logout };
};

export default useAuthentication;
