import { DeleteIcon, StarIcon } from "../../../../components/ui/icons";
import { Link } from "react-router-dom";
import ArrowDown from "../../../../components/ui/icons/ArrowDown";
import ArrowRight from "../../../../components/ui/icons/ArrowRight";
import EditIcon from "../../../../components/ui/icons/EditIcon";
import ListOfReviews from "../listOfReviews/ListOfReviews";

const Table = () => {
  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg relative mb-10">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-600 uppercase bg-gray-400/25 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Usuario
            </th>
            <th scope="col" className="px-6 py-3">
              Correo
            </th>
            <th scope="col" className="px-6 py-3">
              Rol
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Delete</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
            >
              <Link
                to={`/user/admin`}
                className="flex items-center gap-3 hover:opacity-70"
              >
                <img
                  src="/placeholder-user.jpg"
                  className="w-11 rounded-full"
                />
                Lindsey Stroud
              </Link>
            </th>
            <td className="px-6 py-4">lindsey</td>
            <td className="px-6 py-4">lindsey.stroud@gmail.com</td>
            <td className="px-6 py-4">Profesional</td>
            <td className="px-6 py-4 mt-1 text-right flex justify-end gap-2">
              <button className="hover:opacity-45 flex items-center ">
                <ArrowRight />
              </button>
              <button className="hover:opacity-45">
                <EditIcon width={30} height={30} />
              </button>
              <button className="hover:opacity-45">
                <DeleteIcon width={30} height={30} />
              </button>
            </td>
          </tr>
          <tr className="  text-white">
            <td colSpan="5" className="bg-violet-400 h-28">
              <ListOfReviews />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
