import { useState } from "react";
import Service from "./Service";

const Table = ({ services }) => {
  const [limit, setLimit] = useState(5);

  const handleSetLimitUsers = () => {
    setLimit(limit + 5);
  };

  const visibleServices = services.slice(0, limit);

  return (
    <>
      <div className="overflow-x-auto shadow-md sm:rounded-lg relative mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-600 uppercase bg-gray-400/25 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleServices.map((service) => (
              <Service key={service.id} id={service.id} name={service.name} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mb-10">
        {visibleServices.length < services.length && (
          <button
            onClick={handleSetLimitUsers}
            className="bg-violet-500 text-white px-12 py-3 text- rounded-full font-bold"
          >
            Cargar más
          </button>
        )}
      </div>
    </>
  );
};

export default Table;
