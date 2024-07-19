import { useState } from "react";
import User from "../user/User";

const Table = ({ users }) => {
  const [limitUsers, setLimitUsers] = useState(5);

  const handleSetLimitUsers = () => {
    setLimitUsers(limitUsers + 5);
  };

  const visibleUsers = users.slice(0, limitUsers);

  return (
    <>
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
            {visibleUsers.map((user) => (
              <User
                key={user.Id}
                firstname={user.firstName}
                lastname={user.lastName}
                img={user.profileImg}
                username={user.username}
                email={user.email}
                role={user.role}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mb-10">
        {visibleUsers.length < users.length && (
          <button
            onClick={handleSetLimitUsers}
            className="bg-violet-500 text-white px-12 py-3 text- rounded-full font-bold"
          >
            Cargar más
          </button>
        )}
      </div>
    </>
  );
};

export default Table;
