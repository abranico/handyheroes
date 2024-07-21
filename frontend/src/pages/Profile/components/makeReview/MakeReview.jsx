import { useContext, useState } from "react";
import { AuthenticationContext } from "../../../../context/authentication/authentication.context";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";

const MakeReview = ({
  toggle,
  id,
  username,
  firstName,
  lastName,
  profileImg,
}) => {
  const { user } = useContext(AuthenticationContext);
  const { handleAddReview, error } = useContext(ReviewsContext);

  const [newReview, setNewReview] = useState({
    client: {
      id: user.id,
      username: user.username,
      firstName: user.firstName,
      profileImg: user.profileImg,
      status: user.status,
    },
    professional: {
      id: id,
      username: username,
      firstName: firstName,
      lastName: lastName,
      profileImg: profileImg,
      status: true,
    },
    content: "",
    rating: 0,
    date: new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }), // Formato "13 feb 2021"
  });

  const [errorApi, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (newReview.rating < 1 || newReview.rating > 5) return setError(true);

    handleAddReview(newReview);

    toggle(); // Solo para cerrar el modal por ahora
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center p-4 md:p-12">
        <div className="bg-white max-w-lg w-full rounded-lg shadow-lg">
          <header className="p-5 bg-blue-600 text-white rounded-t-lg text-center">
            <h2 className="text-2xl font-semibold">Agregar Reseña</h2>
          </header>
          <main className="p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contenido *
                </label>
                <textarea
                  name="content"
                  value={newReview.content}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                  rows="4"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Estrellas *
                </label>
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleChange}
                  required
                  min="1"
                  max="5"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
              </div>
              <footer className="flex justify-between p-4 space-x-3 rounded-b-lg w-full items-center">
                <div>
                  {error ||
                    (errorApi && (
                      <p className="text-red-400">Error al crear la reseña</p>
                    ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={toggle}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Agregar
                  </button>
                </div>
              </footer>
            </form>
          </main>
        </div>
      </div>
    </>
  );
};

export default MakeReview;
