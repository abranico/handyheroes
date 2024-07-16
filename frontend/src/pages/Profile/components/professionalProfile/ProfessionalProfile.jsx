import { useContext, useState } from "react";
import {
  PhoneIcon,
  MapIcon,
  EmailIcon,
  StarIcon,
} from "../../../../components/ui/icons";
import { AuthenticationContext } from "../../../../context/authentication/authentication.context";
import { Review } from "../../components";
const ProfessionalProfile = ({
  image,
  fullname,
  username,
  rating,
  services,
  location,
  description,
  number,
  email,
  reviews,
}) => {
  const { user } = useContext(AuthenticationContext);
  const isOwner = user.username === username;
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  return (
    <>
      <div className="h-[180px] text-white bg-gradient-to-r from-cyan-600 to-blue-600"></div>
      <main className="px-5 py-2 flex flex-col gap-3 pb-6 max-w-4xl mx-auto ">
        <header className=" flex items-center gap-5 ">
          <div className="h-[220px] shadow-md max-w-[220px] w-full rounded-full border-4 overflow-hidden -mt-16 border-white">
            <img
              src={image || "/placeholder-user.jpg"}
              className="w-full h-full rounded-full object-center object-cover"
            />
          </div>
          <div className="-mt-10 flex justify-between w-full">
            <div>
              <h3 className="text-3xl text-slate-900 relative font-bold leading-6">
                {fullname}
              </h3>
              <p className="text-mdm text-gray-600">@{username}</p>
            </div>
            {isOwner ? (
              isEditing ? (
                <button
                  onClick={handleSaveEdit}
                  type="button"
                  className="w-32 inline-flex  cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-green-700 px-3 py-2 text-sm font-medium text-white transition hover:border-green-300 hover:bg-green-600 active:bg-green-700 focus:green-gray-300 focus:outline-none focus:ring-2 focus:ring-green-300"
                >
                  GUARDAR
                </button>
              ) : (
                <button
                  onClick={() => setIsEditing(true)}
                  type="button"
                  className="w-32 inline-flex  cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  EDITAR
                </button>
              )
            ) : (
              !reviews.some((review) => review.clientId === user.id) && (
                <button
                  type="button"
                  className="w-32 inline-flex  cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-300 hover:bg-blue-600 active:bg-blue-700 focus:blue-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Dejar reseña
                </button>
              )
            )}
          </div>
        </header>

        <div className="flex  gap-5  -mt-16">
          <div className="max-w-[220px] w-full "></div>
          <div className="pb-10 w-full">
            <section className="flex flex-col mb-5 gap-5 text-neutral-6">
              <p className="flex gap-3">
                <div className="flex items-center">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <span className="ms-2 text-sm font-bold text-gray-900 ">
                    {rating}
                  </span>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full "></span>
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 underline hover:no-underline "
                  >
                    73 reviews
                  </a>
                </div>
              </p>

              <p className="flex items-center gap-2">
                <MapIcon />
                {location}
              </p>
              <span className="text-2xl p-3 text-neutral-800 border rounded-md shadow-sm">
                {services}
              </span>
            </section>
            <section className="border min-h-32 max-h-72 overflow-auto w-full p-3 shadow-sm rounded-md">
              <p className="text-md ">{description}</p>
            </section>
            <section className="border flex gap-10  p-3 mt-5 min-h-20 shadow-sm rounded-md">
              <p className="flex items-center gap-2 text-sm">
                <PhoneIcon />
                {number}
              </p>
              <p className="flex items-center gap-2 text-sm">
                <EmailIcon />
                {email}
              </p>
            </section>
            <section className="mt-5">
              <ul>
                {/* {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Review
                      key={review.id}
                      id={review.id}
                      userId={review.clientId}
                      content={review.content}
                      rating={review.rating}
                      author={review.clientId}
                    />
                  ))
                ) : (
                  <li className="flex items-center justify-center border h-36 text-gray-600 bg-black/5">
                    No hay reseñas
                  </li>
                )} */}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfessionalProfile;
