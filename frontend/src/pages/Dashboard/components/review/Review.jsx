import { useContext } from "react";
import { StarIcon } from "../../../../components/ui/icons";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";
import { Link } from "react-router-dom";

const Review = ({
  id,
  img,
  firstName,
  lastName,
  rating,
  content,
  username,
  date,
}) => {
  const { deleteReview } = useContext(ReviewsContext);

  const handleDelete = () => {
    deleteReview(id);
  };

  return (
    <li className="flex flex-col gap-4 border shadow-md bg-gray-100 rounded-md p-4 text-gray-700">
      <header className="flex justify justify-between">
        <div className="flex gap-2">
          <Link
            to={`/user/${username}`}
            className="flex items-center gap-2 hover:opacity-60"
          >
            <img
              className="rounded-full max-w-7 max-h-7"
              src={img || "/placeholder-user.jpg"}
            />

            <span>
              {firstName} {lastName}
            </span>
          </Link>
        </div>
        <div className="flex p-1 gap-1 text-orange-300">
          {[...new Array(5)].map((star, index) =>
            index < rating ? (
              <StarIcon key={index} />
            ) : (
              <StarIcon key={index} fill={true} />
            )
          )}
        </div>
      </header>

      <p className="text-gray-600">{content}</p>

      <footer className="flex justify-between">
        <span>{date}</span>
        {true && (
          <button onClick={handleDelete} className="text-red-500">
            Eliminar
          </button>
        )}
      </footer>
    </li>
  );
};

export default Review;
