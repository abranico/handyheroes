import Review from "../review/Review";

const ListOfReviews = ({ role, reviewsMade }) => {
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
            date={review.date}
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
            date={review.date}
          />
        ))}
    </ul>
  );
};
export default ListOfReviews;
