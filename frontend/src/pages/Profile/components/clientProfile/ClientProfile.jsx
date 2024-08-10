import { useContext } from "react";
import { AuthenticationContext } from "../../../../context/authentication/authentication.context";
import Review from "../review/Review";

const ClientProfile = ({
  id,
  image,
  fullname,
  username,
  reviews,
  isEditing,
  handleSaveEdit,
  setIsEditing,
}) => {
  const { user } = useContext(AuthenticationContext);

  const isOwner = user.username === username;

  return (
    <>
      <div className="h-[180px] text-white bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
      <main className="px-5 py-2 flex flex-col gap-3 pb-6 max-w-4xl mx-auto">
        <header className="flex flex-col md:flex-row items-center gap-5">
          <div className="h-[220px] shadow-md max-w-[220px] w-full rounded-full border-4 overflow-hidden -mt-16 border-white">
            <img
              src={image || "/placeholder-user.jpg"}
              className="w-full h-full rounded-full object-center object-cover bg-white"
            />
          </div>
          <div className="-mt-10 flex flex-col md:flex-row justify-between w-full">
            <div className="text-center md:text-left">
              <h3 className="text-3xl text-slate-900 relative font-bold leading-6 mt-5 md:mt-0">
                {fullname}
              </h3>
              <p className="text-md text-gray-600">@{username}</p>
            </div>
            {isOwner &&
              (isEditing ? (
                <button
                  onClick={() => handleSaveEdit(id)}
                  type="button"
                  className="w-full md:w-32 inline-flex cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-green-700 px-3 py-2 text-sm font-medium text-white transition hover:border-green-300 hover:bg-green-600 active:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-300 mt-3 md:mt-0"
                >
                  GUARDAR
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  type="button"
                  className="w-full md:w-32 inline-flex cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mt-3 md:mt-0"
                >
                  EDITAR
                </button>
              ))}
          </div>
        </header>

        <div className="flex flex-col md:flex-row gap-5 md:-mt-16 -mt-6">
          <div className="max-w-[220px] w-full"></div>
          <div className="pb-10 w-full">
            <section className="mt-28">
              <h3 className="text-2xl text-slate-500 leading-6 font-medium mb-5">
                Reseñas hechas
              </h3>
              <ul className="flex flex-col gap-3">
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Review
                      key={review.id}
                      id={review.id}
                      userId={review.professional.id}
                      author={review.client.id}
                      content={review.content}
                      rating={review.rating}
                      img={review.professional.profileImg}
                      firstName={review.professional.firstName}
                      lastName={review.professional.lastName}
                      client={review.professional.username}
                      clientId={review.client.id}
                      date={review.date}
                    />
                  ))
                ) : (
                  <li className="flex items-center justify-center border h-36 text-gray-600 bg-black/5">
                    No hay reseñas
                  </li>
                )}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ClientProfile;
