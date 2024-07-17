import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthenticationContext } from "../../context/authentication/authentication.context";

const Navbar = () => {
  const { user, handleLogout } = useContext(AuthenticationContext);
  return (
    <nav className="flex justify-between mx-14 items-center p-6 ">
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
      <ul className="flex items-center">
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `flex items-center gap-2 justify-center py-2 w-40  px-4 hover:bg-black/10 transition-all ${
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
            <span>Servicios</span>
          </NavLink>
        </li>
        <li className="flex items-center">
          <NavLink
            to={`/user/${user.username}`}
            className={({ isActive }) =>
              `flex items-center gap-2 justify-center py-2 w-40 px-4  hover:bg-black/10 transition-all ${
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
        <li>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 justify-center py-2  px-4 hover:bg-black/10 transition-all"
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
