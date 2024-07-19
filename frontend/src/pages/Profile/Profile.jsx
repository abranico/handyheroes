import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsContext } from "../../context/reviews/reviews.context";
import useUsers from "../../hooks/useUsers";
import { ClientProfile, ProfessionalProfile } from "./components";
import { LoadingSpinner } from "../../components";

const Profile = () => {
  const { username } = useParams();
  const { getByUsername, users: user, loading } = useUsers();
  const { reviews } = useContext(ReviewsContext);

  useEffect(() => {
    getByUsername(username);
  }, [username]);

  const fullname = user.firstName + " " + user.lastName;
  const rating = 4.95;
  const location = user.country + ", " + user.city;
  const userReviews =
    user.role === "professional"
      ? reviews.filter((review) => review.professionalId == user.id)
      : reviews.filter((review) => review.clientId == user.id);

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        ((user.role === "professional" && (
          <ProfessionalProfile
            image={user.profileImg}
            fullname={fullname}
            username={user.username}
            rating={rating}
            services={user.services}
            location={location}
            description={user.description}
            number={user.phoneNumber}
            email={user.email}
            reviews={userReviews}
          />
        )) ||
          (user.role === "client" && (
            <ClientProfile
              image={user.ProfileImg}
              fullname={fullname}
              username={user.username}
              reviews={userReviews}
            />
          )))}
    </>
  );
};

export default Profile;
