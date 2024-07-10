import { useContext, useState } from "react";
import { Input, Select } from "../../components";
import { MapIcon, SearchIcon } from "../../components/ui/icons";
import { AuthenticationContext } from "../../context/authentication/authentication.context";
import { User } from "./components";

const Services = () => {
  const { users } = useContext(AuthenticationContext);

  const filteredUsers = users.filter(
    (user) => user.description && user.city && user.country && user.service
  );

  console.log(users);
  const services = [
    { id: 1, name: "Albañil" },
    { id: 2, name: "Electricista" },
    { id: 3, name: "Plomero" },
    { id: 4, name: "Carpintero" },
  ];

  const [professionalInput, setProfessionalInput] = useState("");

  return (
    <>
      <header className="px-6 py-11  text-white bg-gradient-to-r from-cyan-600 to-blue-600 ">
        <h1 className="mx-14 text-4xl font-bold">
          Busca el profesional y servicio deseado.
        </h1>
        <div className="mx-14 flex mt-9 py-5 gap-7">
          <Select
            options={services}
            placeholder="Buscar oficio"
            icon={<SearchIcon />}
          />

          <Input
            type="search"
            placeholder="Buscar profesional"
            value={professionalInput}
            onChange={(e) => setProfessionalInput(e.target.value)}
            icon={<SearchIcon />}
          />
          <Input type="search" placeholder="Ex: New York" icon={<MapIcon />} />
          <Input
            type="search"
            placeholder="Buscar profesional"
            icon={<SearchIcon />}
          />
        </div>
      </header>

      <main>
        <ul className="mx-14 px-6">
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <User
                key={user.id}
                id={user.id}
                username={user.username}
                img={user.profileImg}
                name={user.firstname + " " + user.lastname}
                description={user.description}
                service={user.service}
              />
            ))
          ) : (
            <li className="bg-gray-400 h-[220px] flex items-center justify-center font-semiboldbold text-4xl mt-5">
              No hay profesionales para mostrar
            </li>
          )}
        </ul>
      </main>
    </>
  );
};

export default Services;
