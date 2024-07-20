import { useContext } from "react";
import Review from "../review/Review";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";

const ListOfReviews = ({ role, id }) => {
  const { reviews } = useContext(ReviewsContext);

  const reviewsMade = reviews.filter((review) => {
    if (role === "professional") {
      return review.professional.id === id;
    } else if (role === "client") {
      return review.client.id === id;
    }
    return false;
  });

  return (
    <ul className="p-5 flex flex-col gap-5 overflow-y-auto max-h-80 ">
      {role === "professional" &&
        reviewsMade.map((review) => (
          <Review
            key={review.id}
            id={review.id}
            content={review.content}
            rating={review.rating}
            img={review.client.profileImg}
            firstName={review.client.firstName}
            lastName={review.client.lastName}
            username={review.client.username}
          />
        ))}
      {role === "client" &&
        reviewsMade.map((review) => (
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
            username={review.professional.username}
          />
        ))}
    </ul>
  );
};
export default ListOfReviews;
