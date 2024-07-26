import { useContext, useState } from "react";
import { ServicesContext } from "../../../../context/services/services.context";

const EditService = ({ toggle, id, name }) => {
  const { services, handleUpdate } = useContext(ServicesContext);

  const [newService, setNewService] = useState(name);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setNewService(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (newService.trim() === "")
      return setError("Debes completar los datos requeridos");

    if (
      services.find((service) => service.name === newService) &&
      services.find((service) => service.name === newService)?.id != id
    )
      return setError("Ese servicio ya existe");

    handleUpdate(id, { name: newService });
    toggle();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-80">
      <div className="bg-white max-w-5xl w-full rounded-lg shadow-lg">
        <header className="p-5 bg-blue-600 text-white rounded-t-lg text-center">
          <h2 className="text-2xl font-semibold">Editar Servicio</h2>
        </header>
        <main className="p-6">
          <form onSubmit={handleSubmit} className="">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                required
                name="firstName"
                value={newService}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>

            <footer className="flex justify-between p-4 space-x-3 rounded-b-lg w-full col-span-3 items-center">
              <div>{error && <p className="text-red-400">{error}</p>}</div>
              <div className="flex gap-2">
                <button
                  onClick={toggle}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                >
                  Cancelar
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                  Editar
                </button>
              </div>
            </footer>
          </form>
        </main>
      </div>
    </div>
  );
};

export default EditService;
