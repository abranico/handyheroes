import { useEffect, useState } from "react";
import { authenticate } from "../services/authentication";

const useAuthentication = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("__user__");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuthenticate = (authenticationRequest) => {
    setError(null);
    setLoading(true);
    authenticate(authenticationRequest)
      .then((newUser) => {
        localStorage.setItem("__user__", JSON.stringify(newUser));
        setUser(newUser);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  const logout = () => {
    localStorage.removeItem("__user__");
    setUser(null);
  };

  return { user, error, loading, handleAuthenticate, logout };
};

export default useAuthentication;
