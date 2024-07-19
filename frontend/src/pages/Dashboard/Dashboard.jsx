import { useContext, useState } from "react";
import { Input, LoadingSpinner } from "../../components";
import { SearchIcon } from "../../components/ui/icons";
import { UsersContext } from "../../context/users/users.context";
import Table from "./components/table/Table";
import AddIcon from "../../components/ui/icons/AddIcon";
import AddUser from "./components/addUser/AddUser";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [toggleAddUser, setToggleAddUser] = useState(false);

  const { users, loading } = useContext(UsersContext);

  const filteredUsers = users.filter((user) => {
    if (filter === "") return true;
    const filterLower = filter.toLowerCase();
    return (
      user.username?.toLowerCase().includes(filterLower) ||
      user.email?.toLowerCase().includes(filterLower) ||
      user.firstName?.toLowerCase().includes(filterLower) ||
      user.lastName?.toLowerCase().includes(filterLower)
    );
  });

  const handleToggleAddUser = () => {
    setToggleAddUser(!toggleAddUser);
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      {toggleAddUser && <AddUser toggle={handleToggleAddUser} />}
      <header className="px-6 py-11  text-white bg-gradient-to-r from-violet-500 to-violet-400 ">
        <h1 className="mx-14 text-5xl font-bold py-5 text-center">
          Panel de control
        </h1>
      </header>

      <main className="mx-14 px-6">
        <div className="flex justify-between items-center">
          <div className="max-w-sm my-6 w-full flex gap-4">
            <Input
              type="search"
              icon={<SearchIcon />}
              placeholder="Buscar usuario"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
            <button
              onClick={handleToggleAddUser}
              className="py-2 px-4 bg-green-200 rounded hover:bg-green-400"
            >
              <AddIcon />
            </button>
          </div>
          <p>
            <span className="font-bold">{filteredUsers.length}</span> Usuarios
            encontrados
          </p>
        </div>
        <Table users={filteredUsers} />
      </main>
    </>
  );
};

export default Dashboard;
