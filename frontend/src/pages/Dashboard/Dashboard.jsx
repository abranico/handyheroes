import { Input } from "../../components";
import { SearchIcon } from "../../components/ui/icons";
import { useEffect, useState } from "react";
import useUsers from "../../hooks/useUsers";
import Table from "./components/table/Table";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const { users, getAll } = useUsers();

  useEffect(() => {
    getAll();
  }, []);

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

  return (
    <>
      <header className="px-6 py-11  text-white bg-gradient-to-r from-violet-500 to-violet-400 ">
        <h1 className="mx-14 text-5xl font-bold py-5 text-center">
          Panel de control
        </h1>
      </header>

      <main className="mx-14 px-6">
        <div className="flex justify-between items-center">
          <div className="max-w-sm my-6 w-full">
            <Input
              type="search"
              icon={<SearchIcon />}
              placeholder="Buscar usuario"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
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
