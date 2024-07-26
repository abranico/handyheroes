import { useContext } from "react";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";
import { Link } from "react-router-dom";
import { ServicesContext } from "../../../../context/services/services.context";

const User = ({
  id,
  username,
  img,
  name,
  description,
  serviceId,
  country,
  city,
}) => {
  const { reviews } = useContext(ReviewsContext);
  const { services } = useContext(ServicesContext);

  const serviceFound = services.find((service) => service.id === serviceId);
  const service = serviceFound?.name;

  const reviewsMade = reviews.filter((review) => review.professional.id === id);

  const totalReviews = reviewsMade.length;
  const sumRatings = reviewsMade.reduce(
    (acc, review) => acc + review.rating,
    0
  );

  const averageRating = sumRatings / totalReviews;
  const ratingMessage =
    averageRating >= 3 ? "Mayormente positivas" : "Mayormente negativas";

  return (
    <Link
      to={`/user/${username}`}
      className="max-h-[240px] h-full w-full max-w-[600px] rounded-lg border shadow transition hover:shadow-lg flex my-5 text-gray-800 bg-white hover:scale-105"
    >
      <div className="w-[240px] h-full overflow-hidden rounded-l-lg">
        <img
          src={img || "/placeholder-user.jpg"}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-5 justify-between w-full">
        <div className="flex flex-col">
          <span className="text-2xl font-semibold overflow-hidden overflow-ellipsis whitespace-nowrap max-h-16">
            {name}
          </span>
          <p className="text-md mt-2 overflow-hidden text-gray-600 line-clamp-3 ">
            {description}
          </p>
        </div>
        <div className="flex flex-col justify-between  mt-4 gap-1">
          <p className="text-xl overflow-ellipsis whitespace-nowrap overflow-hidden max-w-72">
            {service}
          </p>
          <p className="text-sm text-gray-500 overflow-ellipsis whitespace-nowrap overflow-hidden max-w-72">
            {country}, {city}
          </p>
          <div className="flex justify-between  gap-4 text-gray-500">
            <span>
              {totalReviews} Reseña{totalReviews > 1 && "s"}
            </span>
            <span
              className={averageRating >= 3 ? "text-green-500" : "text-red-500"}
            >
              {ratingMessage}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default User;
