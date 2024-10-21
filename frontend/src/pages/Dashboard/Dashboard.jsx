import { useCallback, useContext, useMemo, useState } from "react";
import { Input, LoadingSpinner } from "../../components";
import { SearchIcon } from "../../components/ui/icons";
import AddIcon from "../../components/ui/icons/AddIcon";
import { UsersContext } from "../../context/users/users.context";
import AddUser from "./components/addUser/AddUser";
import Table from "./components/table/Table";
import DashboardServices from "./components/dashboardServices/DashboardServices";
import useDocumentTitle from "@/hooks/useDocumentTitle";

const Dashboard = () => {
  const [filter, setFilter] = useState("");
  const [toggleAddUser, setToggleAddUser] = useState(false);
  const [dashboardService, setDashboardService] = useState(false);

  const { users, loading } = useContext(UsersContext);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      if (filter === "") return true;
      const filterLower = filter.toLowerCase();
      return (
        user.username?.toLowerCase().includes(filterLower) ||
        user.email?.toLowerCase().includes(filterLower) ||
        user.firstName?.toLowerCase().includes(filterLower) ||
        user.lastName?.toLowerCase().includes(filterLower)
      );
    });
  }, [users, filter]);

  const handleToggleAddUser = useCallback(() => {
    setToggleAddUser((prev) => !prev);
  }, []);
  useDocumentTitle("Dashboard");

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
        <div className="flex flex-wrap gap-7 mt-5 text-2xl text-gray-500 uppercase bg-gray-100 p-3 justify-center">
          <button
            onClick={() => setDashboardService(false)}
            className={`${
              dashboardService ? "" : "border-b text-violet-800"
            } border-violet-400`}
          >
            Usuarios
          </button>
          <button
            onClick={() => setDashboardService(true)}
            className={`${
              dashboardService ? "border-b text-violet-800" : ""
            } border-violet-400`}
          >
            Servicios
          </button>
        </div>

        {dashboardService ? (
          <DashboardServices />
        ) : (
          <div>
            <div className="flex justify-between flex-wrap  items-center">
              <div className="max-w-sm my-6 w-full flex   gap-4">
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
                <span className="font-bold">{filteredUsers.length}</span>{" "}
                Usuarios encontrados
              </p>
            </div>
            <Table users={filteredUsers} />
          </div>
        )}
      </main>
    </>
  );
};

export default Dashboard;
