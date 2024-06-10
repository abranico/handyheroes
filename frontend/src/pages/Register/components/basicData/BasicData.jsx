import { Input } from "../../../../components";

const BasicData = ({ onCompleteBasicData }) => {
  return (
    <main className="mt-6 max-w-lg mx-auto">
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Ingresa tu Información Básica
      </h2>
      <form className="mt-12 w-full">
        <div className="mb-4 w-full">
          <Input placeholder="Nombre de Usuario" />
        </div>
        <div className="mb-4 flex gap-3">
          <Input placeholder="Nombre" />
          <Input placeholder="Apellido" />
        </div>
        <div className="mb-4 w-full">
          <Input type="email" placeholder="Correo Electrónico" />
        </div>
        <div className="mb-4 w-full">
          <Input type="password" placeholder="Contraseña" />
        </div>
        <div className="mb-4 w-full">
          <Input type="password" placeholder="Repetir Contraseña" />
        </div>
        <div>
          <button
            onClick={onCompleteBasicData}
            className="bg-blue-500 w-full text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold"
          >
            SIGUIENTE
          </button>
        </div>
      </form>
    </main>
  );
};

export default BasicData;
