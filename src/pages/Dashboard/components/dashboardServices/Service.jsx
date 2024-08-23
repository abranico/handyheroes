import { useContext, useState } from "react";
import { DeleteIcon, EditIcon } from "../../../../components/ui/icons";
import EditService from "./EditService";
import { ServicesContext } from "../../../../context/services/services.context";

const Service = ({ id, name }) => {
  const { handleDelete } = useContext(ServicesContext);
  const [toggleEditService, setToggleEditService] = useState(false);

  const handleToggleEditService = () => {
    setToggleEditService((prev) => !prev);
  };

  return (
    <>
      {toggleEditService && (
        <EditService id={id} name={name} toggle={handleToggleEditService} />
      )}
      <tr className="bg-white border-b">
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  "
        >
          {name}
        </th>

        <td className="px-6 py-4 mt-1 text-right flex justify-end gap-2">
          <button
            onClick={handleToggleEditService}
            title="Editar"
            className="hover:opacity-45"
          >
            <EditIcon width={30} height={30} />
          </button>

          <button
            onClick={() => handleDelete(id)}
            className="hover:opacity-45"
            title="Borrar"
          >
            <DeleteIcon width={30} height={30} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default Service;
