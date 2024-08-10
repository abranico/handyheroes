import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/authentication.context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, handleLogout } = useContext(AuthenticationContext);

  return (
    <nav className="flex justify-between md:mx-14 items-center p-6 relative">
      <NavLink
        to="/"
        className="flex items-center cursor-pointer hover:opacity-60"
      >
        <img
          src="/logo.png"
          alt="HandyHeroes Logo"
          className="w-8 rounded-full"
        />
        <span className="text-2xl font-bold text-blue-900 ml-2">
          HandyHeroes
        </span>
      </NavLink>

      {/* Botón del menú hamburguesa */}
      <button
        className="block md:hidden p-2 text-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#000000"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </svg>
      </button>

      {/* Menú de navegación */}
      <ul
        className={`flex-col md:flex md:flex-row items-center md:static absolute top-full left-0 w-full md:w-auto md:h-auto bg-white md:bg-transparent z-10 md:z-auto transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <li className="border-t md:border-none">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `flex items-center gap-2 justify-center py-2 w-full md:w-40 px-4 hover:bg-black/10 transition-all ${
                isActive ? "bg-black/10" : ""
              } `
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <span>Servicios</span>
          </NavLink>
        </li>
        {user.role === "admin" ? (
          <li className="border-t md:border-none">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-2 justify-center py-2 w-full md:w-40 px-4 hover:bg-black/10 transition-all ${
                  isActive ? "bg-black/10" : ""
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-layout-dashboard"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4h6v8h-6z" />
                <path d="M4 16h6v4h-6z" />
                <path d="M14 12h6v8h-6z" />
                <path d="M14 4h6v4h-6z" />
              </svg>
              <span>Dashboard</span>
            </NavLink>
          </li>
        ) : (
          <li className="border-t md:border-none">
            <NavLink
              to={`/user/${user.username}`}
              className={({ isActive }) =>
                `flex items-center gap-2 justify-center py-2 w-full md:w-40 px-4 hover:bg-black/10 transition-all ${
                  isActive ? "bg-black/10" : ""
                } `
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-circle"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#000000"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
              </svg>
              <span>Perfil</span>
            </NavLink>
          </li>
        )}
        <li className="border-t md:border-none">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 justify-center py-2 w-full md:w-auto px-4 hover:bg-black/10 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-logout-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
              <path d="M15 12h-12l3 -3" />
              <path d="M6 15l-3 -3" />
            </svg>
            <span>Cerrar sesión</span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
