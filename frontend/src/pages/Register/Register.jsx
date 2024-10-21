import { useContext, useState } from "react";

import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/authentication.context";
import BasicData from "./components/basicData/BasicData";
import ChooseRol from "./components/chooseRol/ChooseRol";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const initialErrors = {
  username: false,
  firstname: false,
  lastname: false,
  email: false,
  password: false,
  validationPassword: false,
  rol: false,
};

const Register = () => {
  const navigate = useNavigate();
  useDocumentTitle("Register");

  const {
    handleRegister,
    handleLogin,
    user,
    error: errorApi,
  } = useContext(AuthenticationContext);

  const [basicData, setBasicData] = useState(false);

  const [rol, setRol] = useState(null);
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validationPassword, setValidationPassword] = useState("");

  const [error, setError] = useState(initialErrors);

  if (user) return <Navigate to="/services" replace />;

  const handleCompleteBasicData = () => {
    setBasicData(!basicData);
  };

  const handleSetRol = ($rol) => {
    if (rol === $rol) return setRol(null);
    setRol($rol);
  };

  const handleErrors = () => {
    const newErrors = { ...initialErrors }; // Copia de initialErrors para resetear

    if (username.trim() === "") {
      newErrors.username = true;
    }

    if (firstname.trim() === "") {
      newErrors.firstname = true;
    }

    if (lastname.trim() === "") {
      newErrors.lastname = true;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.toLowerCase())) {
      newErrors.email = true;
    }

    if (password.trim().length < 7) {
      newErrors.password = true;
    }

    if (validationPassword !== password) {
      newErrors.validationPassword = true;
    }

    setError(newErrors);

    return Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = () => {
    const hasErrors = handleErrors();
    if (hasErrors) return;

    if (rol === null) {
      setError((prevError) => ({ ...prevError, rol: true }));
      return;
    }

    const newUser = {
      firstName: firstname,
      lastName: lastname,
      username: username,
      email: email,
      password: password,
      profileImg: "",
      role: rol,
      country: "",
      city: "",
      description: "",
      phoneNumber: "",
      service: "",
      status: true,
    };

    handleRegister(newUser).then((user) => {
      if (user) {
        handleLogin(newUser.email, newUser.password).then(() => {
          navigate("/services");
        });
      } else {
        alert("Elnombre de usuario o correo ya esta en uso");
      }
    });
  };

  return (
    <>
      <header className="md:mx-14 p-6 flex justify-center md:justify-between">
        <nav className="flex flex-col md:flex-row gap-5 md:gap-0 w-full justify-between items-center">
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
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center mt-4 lg:mt-0">
            <p className="text-gray-500 select-none">¿Ya eres usuario?</p>
            <Link
              to="/login"
              className="border border-black px-5 py-1 rounded hover:opacity-60"
            >
              Iniciar sesión
            </Link>
          </div>
        </nav>
      </header>

      {!basicData ? (
        <BasicData
          username={username.trim()}
          handleUsername={(e) => {
            setUsername(e.target.value);
          }}
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
          errors={error}
          handleErrors={handleErrors}
        />
      ) : (
        <ChooseRol
          onCompleteBasicData={handleCompleteBasicData}
          onSetRol={handleSetRol}
          rol={rol}
          handleSubmit={handleSubmit}
          error={error.rol}
          errorApi={errorApi}
        />
      )}
    </>
  );
};

export default Register;
