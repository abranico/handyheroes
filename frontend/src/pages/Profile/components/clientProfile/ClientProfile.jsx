import { StarIcon } from "../../../../components/ui/icons";
import { Review } from "../../components";

const ClientProfile = ({ image, fullname, username, reviews }) => {
  return (
    <>
      <div className="h-[180px] text-white bg-gradient-to-r from-cyan-300 to-cyan-500"></div>
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
          </div>
        </header>

        <div className="flex  gap-5  -mt-16">
          <div className="max-w-[220px] w-full "></div>
          <div className="pb-10 w-full">
            <section className="mt-28">
              <h3 className="text-2xl text-slate-500 leading-6 font-medium mb-5">
                Reseñas hechas
              </h3>
              <ul>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <Review
                      key={review.id}
                      id={review.id}
                      userId={review.professionalId}
                      author={review.clientId}
                      content={review.content}
                      rating={review.rating}
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
