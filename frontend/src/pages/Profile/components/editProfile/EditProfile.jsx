import { useContext, useState } from "react";
import { UsersContext } from "../../../../context/users/users.context";

const EditProfile = ({ toggle, id, role, handleSaveEdit }) => {
  const { users } = useContext(UsersContext);
  const user = users.find((user) => user.id === id);

  const [newUser, setNewUser] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password,
    profileImg: user.profileImg,
    country: user.country,
    city: user.city,
    description: user.description,
    phoneNumber: user.phoneNumber,
    service: user.service,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (
      newUser.firstName.trim() === "" ||
      newUser.lastName.trim() === "" ||
      newUser.email.trim() === "" ||
      newUser.password.trim() === ""
    )
      return setError("Debes completar los datos requeridos");
    if (
      users.find((user) => user.username === newUser.username) &&
      user.username != newUser.username
    )
      return setError("Ya hay una cuenta con ese nombre de usuario");
    if (
      users.find((user) => user.email === newUser.email) &&
      user.email != newUser.email
    )
      return setError("Ya hay una cuenta con ese correo");

    handleSaveEdit(id, newUser);
    toggle();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-8">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-lg">
        <header className="p-5 bg-blue-600 text-white rounded-t-lg text-center">
          <h2 className="text-2xl font-semibold">Editar Usuario</h2>
        </header>
        <main className="p-6 max-h-[500px] overflow-y-auto ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex w-full gap-3">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  name="firstName"
                  value={newUser.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  name="lastName"
                  value={newUser.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                required
                name="email"
                value={newUser.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                required
                name="password"
                value={newUser.password}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Imagen URL
              </label>
              <input
                type="text"
                name="profileImg"
                value={newUser.profileImg}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            {role === "professional" && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Pais
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={newUser.country}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Ciudad
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={newUser.city}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Numero de telefono
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={newUser.phoneNumber}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Servicio
                  </label>
                  <input
                    type="text"
                    name="service"
                    value={newUser.service}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Descripción
                  </label>
                  <textarea
                    name="description"
                    value={newUser.description}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    rows="3"
                  ></textarea>
                </div>
              </>
            )}

            <footer className="flex justify-between p-4 space-x-3 rounded-b-lg items-center">
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

export default EditProfile;
