import { Link } from "react-router-dom";
import { DeleteIcon } from "../../../../components/ui/icons";
import ArrowRight from "../../../../components/ui/icons/ArrowRight";
import ArrowDown from "../../../../components/ui/icons/ArrowDown";
import EditIcon from "../../../../components/ui/icons/EditIcon";

import ListOfReviews from "../listOfReviews/ListOfReviews";
import { useState } from "react";

const User = ({ firstname, lastname, img, username, email, role }) => {
  const [toggleReviews, setToggleReviews] = useState(false);

  const handleToggleReviews = () => {
    setToggleReviews(!toggleReviews);
  };

  return (
    <>
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
          <button className="hover:opacity-45">
            <DeleteIcon width={30} height={30} />
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
