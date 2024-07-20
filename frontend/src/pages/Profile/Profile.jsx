import { useContext } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../components";
import { ReviewsContext } from "../../context/reviews/reviews.context";
import { UsersContext } from "../../context/users/users.context";
import { ClientProfile, ProfessionalProfile } from "./components";

const Profile = () => {
  const { username } = useParams();
  const { users, loading } = useContext(UsersContext);
  const { reviews } = useContext(ReviewsContext);

  const user = users.filter((user) => user.username === username)[0];

  const fullname = user.firstName + " " + user.lastName;

  const location = user.country + ", " + user.city;

  const userReviews =
    user.role === "professional"
      ? reviews.filter((review) => review.professional.id == user.id)
      : reviews.filter((review) => review.client.id == user.id);

  const rating =
    userReviews.reduce((acc, review) => acc + review.rating, 0) /
    userReviews.length;

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        ((user.role === "professional" && (
          <ProfessionalProfile
            image={user.profileImg}
            fullname={fullname}
            username={username}
            rating={rating}
            service={user.service}
            location={location}
            description={user.description}
            number={user.phoneNumber}
            email={user.email}
            reviews={userReviews}
          />
        )) ||
          (user.role === "client" && (
            <ClientProfile
              image={user.profileImg}
              fullname={fullname}
              username={username}
              reviews={userReviews}
            />
          )))}
    </>
  );
};

export default Profile;
