import { Link } from "react-router-dom";
import { BlockIcon } from "../../../../components/ui/icons";
import ArrowRight from "../../../../components/ui/icons/ArrowRight";
import ArrowDown from "../../../../components/ui/icons/ArrowDown";
import EditIcon from "../../../../components/ui/icons/EditIcon";

import ListOfReviews from "../listOfReviews/ListOfReviews";
import { useContext, useState } from "react";
import RestoreIcon from "../../../../components/ui/icons/RestoreIcon";
import { AuthenticationContext } from "../../../../context/authentication/authentication.context";

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
  const { handleUpdate } = useContext(AuthenticationContext);
  const [toggleReviews, setToggleReviews] = useState(false);

  const handleToggleReviews = () => {
    setToggleReviews(!toggleReviews);
  };

  const handleToggleStatus = () => {
    handleUpdate(id, { status: !status });
  };

  return (
    <>
      {status ? <p>v</p> : <p>f</p>}
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
          <button className="hover:opacity-45">
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
            <ListOfReviews />
          </td>
        </tr>
      )}
    </>
  );
};

export default User;
