import { useCallback, useContext, useMemo, useState } from "react";
import { Input, LoadingSpinner } from "../../../../components";
import { AddIcon, SearchIcon } from "../../../../components/ui/icons";

import { ServicesContext } from "../../../../context/services/services.context";
import AddService from "./AddService";
import Table from "./Table";

const DashboardServices = () => {
  const [filter, setFilter] = useState("");
  const [toggleAddService, setToggleAddService] = useState(false);

  const { services, loading } = useContext(ServicesContext);

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      if (filter === "") return true;
      const filterLower = filter.toLowerCase();
      return service.name?.toLowerCase().includes(filterLower);
    });
  }, [services, filter]);

  const handleToggleAddService = useCallback(() => {
    setToggleAddService((prev) => !prev);
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {toggleAddService && <AddService toggle={handleToggleAddService} />}

      <div>
        <div className="flex justify-between items-center">
          <div className="max-w-sm my-6 w-full flex gap-4">
            <Input
              type="search"
              icon={<SearchIcon />}
              placeholder="Buscar servicio"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button
              onClick={handleToggleAddService}
              className="py-2 px-4 bg-green-200 rounded hover:bg-green-400"
            >
              <AddIcon />
            </button>
          </div>
          <p>
            <span className="font-bold">{filteredServices.length}</span>{" "}
            Servicios encontrados
          </p>
        </div>
        <Table services={filteredServices} />
      </div>
    </>
  );
};
export default DashboardServices;
