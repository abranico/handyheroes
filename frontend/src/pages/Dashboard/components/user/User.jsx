import { Link } from "react-router-dom";
import { useCallback, useContext, useState } from "react";
import { UsersContext } from "../../../../context/users/users.context";
import { ReviewsContext } from "../../../../context/reviews/reviews.context";
import ListOfReviews from "../listOfReviews/ListOfReviews";
import EditUser from "../editUser/EditUser";
import DeleteUser from "../deleteUser/DeleteUser";
import {
  BlockIcon,
  EditIcon,
  RestoreIcon,
  DeleteIcon,
  ArrowDown,
  ArrowRight,
} from "../../../../components/ui/icons";

const User = ({
  id,
  firstname,
  lastname,
  img,
  username,
  email,
  role,
  status,
}) => {
  const { handleUpdate } = useContext(UsersContext);
  const { reviews } = useContext(ReviewsContext);

  const [toggleReviews, setToggleReviews] = useState(false);
  const [toggleEditUser, setToggleEditUser] = useState(false);
  const [toggleDeleteUser, setToggleDeleteUser] = useState(false);

  const reviewsMade = reviews.filter((review) => {
    if (role === "professional") {
      return review.professional.id === id;
    } else if (role === "client") {
      return review.client.id === id;
    }
    return false;
  });

  const handleToggleReviews = useCallback(() => {
    setToggleReviews((prev) => !prev);
  }, []);

  const handleToggleStatus = useCallback(() => {
    handleUpdate(id, { status: !status });
  }, [handleUpdate, id, status]);

  const handleToggleEditUser = useCallback(() => {
    setToggleEditUser((prev) => !prev);
  }, []);

  const handleToggleDeleteUser = useCallback(() => {
    setToggleDeleteUser((prev) => !prev);
  }, []);

  return (
    <>
      {toggleEditUser && <EditUser id={id} toggle={handleToggleEditUser} />}
      {toggleDeleteUser && (
        <DeleteUser
          id={id}
          toggle={handleToggleDeleteUser}
          username={username}
        />
      )}
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
        >
          <Link
            to={`/user/${username}`}
            className="flex items-center gap-3 hover:opacity-70"
          >
            <img
              src={img || "/placeholder-user.jpg"}
              className="w-11 rounded-full"
            />
            {firstname} {lastname}
          </Link>
        </th>
        <td className="px-6 py-4">{username}</td>
        <td className="px-6 py-4">{email}</td>
        <td className="px-6 py-4">{role}</td>
        <td className="px-6 py-4 mt-1 text-right flex justify-end gap-2">
          {role != "admin" && reviewsMade.length > 0 && (
            <button
              title="Reseñas"
              onClick={handleToggleReviews}
              className="hover:opacity-45 flex items-center "
            >
              {toggleReviews ? <ArrowDown /> : <ArrowRight />}
            </button>
          )}

          <button
            onClick={handleToggleEditUser}
            title="Editar"
            className="hover:opacity-45"
          >
            <EditIcon width={30} height={30} />
          </button>
          <button
            className="hover:opacity-45"
            title="Bloquear/Debloquear"
            onClick={handleToggleStatus}
          >
            {status ? <BlockIcon width={30} height={30} /> : <RestoreIcon />}
          </button>

          <button
            className="hover:opacity-45"
            title="Borrar"
            onClick={handleToggleDeleteUser}
          >
            <DeleteIcon width={30} height={30} />
          </button>
        </td>
      </tr>

      {toggleReviews && (
        <tr className="text-white ">
          <td colSpan="5" className="bg-violet-400 h-28">
            <ListOfReviews role={role} reviewsMade={reviewsMade} />
          </td>
        </tr>
      )}
    </>
  );
};

export default User;
