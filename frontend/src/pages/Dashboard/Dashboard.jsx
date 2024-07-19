import { Input } from "../../components";
import { SearchIcon } from "../../components/ui/icons";
import Table from "./components/table/Table";

const Dashboard = () => {
  return (
    <>
      <header className="px-6 py-11  text-white bg-gradient-to-r from-violet-500 to-violet-400 ">
        <h1 className="mx-14 text-5xl font-bold py-5">Panel de control.</h1>
      </header>

      <main className="mx-14 px-6">
        <div className="flex justify-between items-center">
          <div className="max-w-sm my-6 w-full">
            <Input
              type="search"
              icon={<SearchIcon />}
              placeholder="Buscar usuario"
            />
          </div>
          <p>0 Usuarios encontrados</p>
        </div>
        <Table />
      </main>
    </>
  );
};

export default Dashboard;
