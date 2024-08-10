import { useContext, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingSpinner } from "../../components";
import { ReviewsContext } from "../../context/reviews/reviews.context";
import { UsersContext } from "../../context/users/users.context";
import ClientProfile from "./components/clientProfile/ClientProfile";
import ProfessionalProfile from "./components/professionalProfile/ProfessionalProfile";
import EditProfile from "./components/editProfile/EditProfile";
import { AuthenticationContext } from "../../context/authentication/authentication.context";
import NotFound from "../../routes/NotFound";

const Profile = () => {
  const { username } = useParams();

  const { users, loading, handleUpdate } = useContext(UsersContext);
  const { user: userAuth } = useContext(AuthenticationContext);

  const { reviews } = useContext(ReviewsContext);
  const [isEditing, setIsEditing] = useState(false);

  const user = useMemo(() => {
    return users.find((user) => user.username === username);
  }, [users, username]);

  const userReviews = useMemo(() => {
    return user.role === "professional"
      ? reviews.filter((review) => review.professional.id === user.id)
      : reviews.filter((review) => review.client.id === user.id);
  }, [reviews, user]);

  if (!user) return <NotFound />;

  const fullname = user.firstName + " " + user.lastName;

  const location =
    user.country && user.city ? user.country + ", " + user.city : "";

  const rating =
    userReviews.reduce((acc, review) => acc + review.rating, 0) /
    userReviews.length;

  const handleSaveEdit = (id, newUser) => {
    setIsEditing(false);
    handleUpdate(id, newUser);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {!loading &&
        ((user.role === "professional" && (
          <ProfessionalProfile
            image={user.profileImg}
            firstName={user.firstName}
            lastName={user.lastName}
            username={username}
            rating={rating}
            serviceId={user.serviceId}
            location={location}
            description={user.description}
            number={user.phoneNumber}
            email={user.email}
            reviews={userReviews}
            id={user.id}
            role={user.role}
            isEditing={isEditing}
            handleSaveEdit={handleSaveEdit}
            setIsEditing={setIsEditing}
            roleAuth={userAuth.role}
          />
        )) ||
          (user.role === "client" && (
            <ClientProfile
              image={user.profileImg}
              fullname={fullname}
              username={username}
              reviews={userReviews}
              isEditing={isEditing}
              handleSaveEdit={handleSaveEdit}
              setIsEditing={setIsEditing}
            />
          )))}
      {isEditing && (
        <EditProfile
          toggle={() => setIsEditing(!isEditing)}
          handleSaveEdit={handleSaveEdit}
          id={user.id}
          role={user.role}
        />
      )}
    </>
  );
};

export default Profile;
