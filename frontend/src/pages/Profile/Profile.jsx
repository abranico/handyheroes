import { useContext } from "react";
import { AuthenticationContext } from "../../context/authentication/authentication.context";
import { ProfessionalProfile, ClientProfile } from "./components";
const Profile = () => {
  const { user } = useContext(AuthenticationContext);

  const fullname = user.firstname + " " + user.lastname;
  const rating = 4.95;
  const location = user.country + ", " + user.city;

  return user.role === "professional" ? (
    <ProfessionalProfile
      image={user.ProfileImg}
      fullname={fullname}
      username={user.username}
      rating={rating}
      services={user.services}
      location={location}
      description={user.description}
      number={user.phoneNumber}
      email={user.email}
    />
  ) : (
    <ClientProfile />
  );
};

export default Profile;
