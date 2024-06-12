import { useContext, useState } from "react";

import BasicData from "./components/basicData/BasicData";
import ChooseRol from "./components/chooseRol/ChooseRol";
import { Link } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/authentication.context";

const Register = () => {
  const navigate = useNavigate();
  const { handleRegister, user } = useContext(AuthenticationContext);
  const [basicData, setBasicData] = useState(false);

  const [rol, setRol] = useState(null);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");

  if (user) return <Navigate to="/services" replace />;

  const handleCompleteBasicData = () => {
    setBasicData(!basicData);
  };

  const handleSetRol = ($rol) => {
    if (rol === $rol) return setRol(null);
    setRol($rol);
  };

  const handleSubmit = () => {
    const newUser = {
      username,
      firstname,
      lastname,
      email,
      password,
      role: rol,
    };

    const register = handleRegister(newUser);
    if (!register) return;
    navigate("/services");
  };

  return (
    <>
      <header className=" mx-14 items-center p-6">
        <nav className="flex justify-between">
          <a className="flex items-center cursor-pointer hover:opacity-60">
            <img
              src="logo.png"
              alt="HandyHeroes Logo"
              className="w-8 rounded-full"
            />
            <h1 className="text-2xl font-bold text-blue-900 ml-2">
              HandyHeroes
            </h1>
          </a>
          <div className="flex gap-5 items-center">
            <a href="" className="text-gray-500 hover:opacity-60">
              ¿Ya eres usuario?
            </a>
            <Link
              to="/login"
              className="border border-black px-5 py-1 rounded hover:opacity-60 "
            >
              Iniciar sesión
            </Link>
          </div>
        </nav>
      </header>

      {!basicData ? (
        <BasicData
          username={username}
          handleUsername={(e) => setUsername(e.target.value)}
          firstname={firstname}
          handleFirstname={(e) => setFirstname(e.target.value)}
          lastname={lastname}
          handleLastname={(e) => setLastname(e.target.value)}
          email={email}
          handleEmail={(e) => setEmail(e.target.value)}
          password={password}
          handlePassword={(e) => setPassword(e.target.value)}
          validationPassword={validationPassword}
          handleValidationPassword={(e) =>
            setValidationPassword(e.target.value)
          }
          onCompleteBasicData={handleCompleteBasicData}
        />
      ) : (
        <ChooseRol
          onCompleteBasicData={handleCompleteBasicData}
          onSetRol={handleSetRol}
          rol={rol}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
};

export default Register;
