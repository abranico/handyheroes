import { DeleteIcon } from "../../../../components/ui/icons";

const Table = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
          <tr className="bg-white border-b hover:bg-gray-50 ">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-3 "
            >
              <img src="/placeholder-user.jpg" className="w-11 rounded-full" />
              Lindsey Stroud
            </th>
            <td className="px-6 py-4">lindsey</td>
            <td className="px-6 py-4">lindsey.stroud@gmail.com</td>
            <td className="px-6 py-4">Profesional</td>
            <td className="px-6 py-4 text-right">
              <button className="hover:opacity-45">
                <DeleteIcon width={30} height={30} />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
