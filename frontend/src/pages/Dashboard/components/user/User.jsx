import { Link } from "react-router-dom";
import { BlockIcon } from "../../../../components/ui/icons";
import ArrowDown from "../../../../components/ui/icons/ArrowDown";
import ArrowRight from "../../../../components/ui/icons/ArrowRight";
import EditIcon from "../../../../components/ui/icons/EditIcon";

import { useContext, useState } from "react";
import RestoreIcon from "../../../../components/ui/icons/RestoreIcon";
import { UsersContext } from "../../../../context/users/users.context";
import ListOfReviews from "../listOfReviews/ListOfReviews";
import EditUser from "../editUser/EditUser";

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
  const [toggleReviews, setToggleReviews] = useState(false);
  const [toggleEditUser, setToggleEditUser] = useState(false);

  const handleToggleReviews = () => {
    setToggleReviews(!toggleReviews);
  };

  const handleToggleStatus = () => {
    handleUpdate(id, { status: !status });
  };

  const handleToggleEditUser = () => {
    setToggleEditUser(!toggleEditUser);
  };

  return (
    <>
      {toggleEditUser && <EditUser id={id} toggle={handleToggleEditUser} />}
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
          <button
            onClick={handleToggleReviews}
            className="hover:opacity-45 flex items-center "
          >
            {toggleReviews ? <ArrowDown /> : <ArrowRight />}
          </button>
          <button onClick={handleToggleEditUser} className="hover:opacity-45">
            <EditIcon width={30} height={30} />
          </button>
          <button className="hover:opacity-45" onClick={handleToggleStatus}>
            {status ? <BlockIcon width={30} height={30} /> : <RestoreIcon />}
          </button>
        </td>
      </tr>

      {toggleReviews && (
        <tr className="text-white ">
          <td colSpan="5" className="bg-violet-400 h-28">
            <ListOfReviews role={role} id={id} />
          </td>
        </tr>
      )}
    </>
  );
};

export default User;
