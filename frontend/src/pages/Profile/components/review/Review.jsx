import { useContext } from "react";
import { StarIcon } from "../../../../components/ui/icons";
import { AuthenticationContext } from "../../../../context/authentication/authentication.context";
import { Link } from "react-router-dom";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";

const Review = ({ id, userId, content, rating, author }) => {
  const { deleteReview } = useContext(ReviewsContext);
  const { user, users } = useContext(AuthenticationContext);
  const { firstName, lastName, profileImg, username } = users.find(
    (user) => user.id === userId
  );

  const isOwner = user.id === author;

  return (
    <li className="flex flex-col gap-4 border shadow-md bg-neutral-100 rounded-md p-4 w-full">
      <header className="flex justify justify-between">
        <div className="flex gap-2">
          <Link
            to={`/user/${username}`}
            className="flex items-center gap-2 hover:opacity-60"
          >
            <img
              className="rounded-full max-w-7 max-h-7"
              src={profileImg || "/placeholder-user.jpg"}
              alt={firstName}
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
        <span>Feb 13, 2021</span>
        {isOwner && (
          <button onClick={() => deleteReview(id)} className="text-red-500">
            Eliminar
          </button>
        )}
      </footer>
    </li>
  );
};

export default Review;
