import { useContext } from "react";
import { UsersContext } from "../../../../context/users/users.context";

const DeleteUser = ({ id, toggle, username }) => {
  const { handleDeleteUser } = useContext(UsersContext);

  const onConfirm = () => {
    handleDeleteUser(id);
    toggle();
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg">
        <header className="p-5 bg-red-600 text-white rounded-t-lg text-center">
          <h2 className="text-lg font-semibold">Confirmar Eliminación</h2>
        </header>
        <main className="p-6 text-center">
          <p className="mb-4 text-gray-700">
            Estás seguro de que deseas eliminar al usuario
            <span className="font-bold"> {username}</span> ?
          </p>
          <div className="flex justify-center gap-4">
            <button
              onClick={toggle}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
            >
              Cancelar
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
            >
              Confirmar
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DeleteUser;
