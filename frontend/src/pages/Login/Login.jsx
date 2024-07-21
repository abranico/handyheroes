import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/authentication.context";

const Login = () => {
  const navigate = useNavigate();
  const { handleLogin, user, error } = useContext(AuthenticationContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) return <Navigate to="/services" replace />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() == "" || password.trim() == "") return;
    handleLogin(email, password);
    if (user && user.status) return navigate("/services");
    console.log(error);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="max-w-md mx-auto flex items-center flex-col justify-center h-screen">
      <header className="flex flex-col w-full">
        <div className="flex">
          <img
            src="logo.png"
            alt="HandyHeroes Logo"
            className="w-8 rounded-full"
          />
          <h1 className="text-2xl font-bold text-blue-900 ml-2">HandyHeroes</h1>
        </div>
        <p className="mt-12 mb-2 text-gray-600">Bienvenido</p>
        <h2 className="font-bold text-4xl text-gray-600">
          Continúe con su cuenta
        </h2>
      </header>
      <main className="w-full">
        <form onSubmit={handleSubmit} className="mt-12 w-full">
          <div className="mb-4 w-full">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700"
            />
          </div>
          <div className="mb-4 relative">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Contraseña"
              className="appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700 pr-10"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2">
              <i className="fas fa-eye text-gray-400"></i>
            </div>
          </div>
          <div>
            <button className="bg-blue-500 w-full text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold">
              CONTINUAR
            </button>
            {error && (
              <p className="text-red-400 mt-5 text-center">
                Usuario o contraseña incorrecta
              </p>
            )}
          </div>
          <div>
            <Link
              to="/register"
              className="block mt-12 mb-6 text-gray-500 hover:text-gray-700 cursor-pointer text-center w-full"
            >
              ¿Eres nuevo? COMENZAR - ES GRATIS
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Login;
