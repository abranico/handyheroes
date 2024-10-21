import { useContext, useMemo, useState } from "react";
import { Input, Select } from "../../components";
import { MapIcon, SearchIcon } from "../../components/ui/icons";
import { UsersContext } from "../../context/users/users.context";
import User from "./components/user/User";
import { ServicesContext } from "../../context/services/services.context";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const Services = () => {
  const { users, loading, error } = useContext(UsersContext);
  const { services: servicesFromApi } = useContext(ServicesContext);
  const [filters, setFilters] = useState({
    serviceId: null,
    professional: "",
    location: "",
  });

  const professionals = useMemo(() => {
    if (!Array.isArray(users)) return [];
    return users.filter(
      (user) =>
        user.description &&
        user.city &&
        user.country &&
        user.serviceId &&
        servicesFromApi.find((service) => service.id === user.serviceId) &&
        user.status
    );
  }, [users, servicesFromApi]);

  const filteredProfessionals = useMemo(() => {
    return professionals.filter((prof) => {
      const matchesService =
        filters.serviceId !== null
          ? prof.serviceId === filters.serviceId
          : true;

      const matchesProfessional = filters.professional
        ? (prof.firstName + " " + prof.lastName)
            .toLowerCase()
            .includes(filters.professional.toLowerCase())
        : true;

      const matchesLocation = filters.location
        ? prof.city.toLowerCase().includes(filters.location.toLowerCase()) ||
          prof.country.toLowerCase().includes(filters.location.toLowerCase())
        : true;

      return matchesService && matchesProfessional && matchesLocation;
    });
  }, [professionals, filters]);

  useDocumentTitle("Services");

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <header className="px-6 py-11 text-white bg-gradient-to-r from-cyan-600 to-blue-600">
        <h1 className="mx-14 text-4xl font-bold">
          Busca el profesional y servicio deseado.
        </h1>
        <div className="mx-14 flex flex-col md:flex-row items-center  mt-9 py-5 gap-7">
          <div className="max-w-80 w-full">
            <Select
              type="combobox"
              options={servicesFromApi}
              placeholder="Buscar oficio"
              icon={<SearchIcon />}
              setFilters={setFilters}
              value={filters.serviceId}
            />
          </div>
          <div className="max-w-80 w-full">
            <Input
              type="search"
              placeholder="Buscar profesional"
              value={filters.professional}
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  professional: e.target.value,
                }))
              }
              icon={<SearchIcon />}
            />
          </div>
          <div className="max-w-80 w-full">
            <Input
              type="search"
              placeholder="Ex: New York"
              icon={<MapIcon />}
              value={filters.location}
              onChange={(e) =>
                setFilters((prevState) => ({
                  ...prevState,
                  location: e.target.value,
                }))
              }
            />
          </div>
        </div>
      </header>

      <main>
        <ul className="mt-5 md:mx-14 px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10 place-items-center">
          {filteredProfessionals.length > 0 &&
            filteredProfessionals.map((user) => (
              <User
                key={user.id}
                id={user.id}
                username={user.username}
                img={user.profileImg}
                name={user.firstName + " " + user.lastName}
                description={user.description}
                serviceId={user.serviceId}
                country={user.country}
                city={user.city}
              />
            ))}
        </ul>
      </main>
    </>
  );
};

export default Services;
