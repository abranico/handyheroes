import { useState } from "react";
import { Link } from "react-router-dom";
import BasicData from "./components/BasicData";
import ChooseRol from "./components/ChooseRol";

export default function Register() {
  const [rol, setRol] = useState("");

  const handleRol = (rol: string) => {
    setRol(rol);
  };

  const handleSubmit = (data: any) => {
    console.log(data);
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

      {rol === "" ? (
        <ChooseRol onChooseRol={handleRol} />
      ) : (
        <BasicData onSubmit={handleSubmit} onGoBack={() => handleRol("")} />
      )}
    </>
  );
}
