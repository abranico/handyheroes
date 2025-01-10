import Loader from "@/components/Loader";
import { login, logout, me } from "@/services/auth";
import { createContext, useContext, useEffect, useState } from "react";

interface Context {
  isAuthenticated: boolean;
}

export const AuthContext = createContext<Context | undefined>(undefined);

interface Provider {
  children: React.ReactNode;
}

export const AuthContextProvider: React.FC<Provider> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      setError(null);
      await me();
      setIsAuthenticated(true);
    } catch (error) {
      if (error instanceof Error) setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  //   const handleLogin = async (request) => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       await login(request);
  //       setIsAuthenticated(true);
  //     } catch (error) {
  //       if (error instanceof Error) setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleLogout = async () => {
  //     setError(null);
  //     setLoading(true);
  //     try {
  //       await logout();
  //       setIsAuthenticated(false);
  //     } catch (error) {
  //       if (error instanceof Error) setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const handleRefresh = async () => {
  //     setError(null);
  //     try {
  //       await refresh();
  //     } catch (error) {
  //       if (error instanceof Error) setError(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
      }}
    >
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
