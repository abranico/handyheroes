import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication/authentication.context";
import { ProfessionalProfile, ClientProfile } from "./components";
import { useParams } from "react-router-dom";
import { ReviewsContext } from "../../context/reviews/reviews.context";
const Profile = () => {
  const { username } = useParams();
  const { users } = useContext(AuthenticationContext);
  const { reviews } = useContext(ReviewsContext);

  const user = users.find((user) => user.username === username);
  const role = user.role;
  const userReviews =
    role === 0
      ? reviews.filter((review) => (review.professionalId = user.id))
      : reviews.filter((review) => (review.clientId = user.id));

  const fullname = user.firstname + " " + user.lastname;
  const rating = 4.95;
  const location = user.country + ", " + user.city;

  return role === 0 ? (
    <ProfessionalProfile
      image={user.ProfileImg}
      fullname={fullname}
      username={user.username}
      rating={rating}
      services={user.service}
      location={location}
      description={user.description}
      number={user.phoneNumber}
      email={user.email}
      reviews={userReviews}
    />
  ) : (
    <ClientProfile
      image={user.ProfileImg}
      fullname={fullname}
      username={user.username}
      reviews={userReviews}
    />
  );
};

export default Profile;
