import { useContext } from "react";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";
import { Link } from "react-router-dom";

const User = ({ id, username, img, name, description, service }) => {
  const { reviews } = useContext(ReviewsContext);
  const reviewsMade = reviews.filter((review) => review.professionalId === id);

  const totalReviews = reviewsMade.length;
  const sumRatings = reviewsMade.reduce(
    (acc, review) => acc + review.rating,
    0
  );

  const averageRating = sumRatings / totalReviews;
  const ratingMessage =
    averageRating >= 3 ? "Mayormente positivas" : "Mayormente negativas";

  console.log(reviewsMade);

  return (
    <Link
      to={`/user/${username}`}
      className="max-h-[220px] h-full rounded-lg border  shadow transition hover:shadow-lg flex my-5 text-white bg-blue-700/80 hover:scale-105   "
    >
      <div className="p-5  max-w-[220px] w-full overflow-hidden  border-white">
        <img
          src={img || "/placeholder-user.jpg"}
          className=" rounded-md w-full h-full object-center object-cover"
        />
      </div>
      <div className="flex flex-col p-3 ">
        <a href="#" className="mt-3 overflow-hidden text-2xl font-semibold">
          {name}
        </a>
        <p className="overflow-hidden text-md my-auto line-clamp-3 ">
          {description}
        </p>

        <div className="flex mt-auto mb-5  justify-between items-center">
          <p className="text-2xl font-semibold ">{service}</p>
          <span className="mr-10 font-semibold flex gap-4 items-center text-neutral-300">
            {totalReviews} Reseña{totalReviews > 1 && "s"}
            <span
              className={averageRating >= 3 ? "text-green-400" : "text-red-400"}
            >
              {ratingMessage}
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default User;
