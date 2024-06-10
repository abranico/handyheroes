import { Input } from "../../components";
import { SearchIcon } from "../../components/ui/icons";

const Services = () => {
  return (
    <>
      <header className="bg-sky-800 px-6 py-11  text-white ">
        <h1 className="mx-14 text-3xl font-bold">
          Busca el profesional y servicio deseado.
        </h1>
        <div className="mx-14 flex mt-9 py-5 gap-7">
          <Input
            type="search"
            placeholder="Buscar profesional"
            icon={<SearchIcon />}
          />
          <Input
            type="search"
            placeholder="Buscar profesional"
            icon={<SearchIcon />}
          />
          <Input
            type="search"
            placeholder="Buscar profesional"
            icon={<SearchIcon />}
          />
          <Input
            type="search"
            placeholder="Buscar profesional"
            icon={<SearchIcon />}
          />
        </div>
      </header>
    </>
  );
};

export default Services;
