const ChooseRol = ({
  onCompleteBasicData,
  onSetRol,
  rol,
  handleSubmit,
  error,
  errorApi,
}) => {
  return (
    <main className="mt-6 max-w-xl mx-auto  pb-11">
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Selecciona tu Rol en HandyHeroes
      </h2>
      <p className="mt-6 mb-2 text-gray-600 text-center">
        Decide si estás buscando servicios para tu hogar o si eres un
        profesional que ofrece tus habilidades. Selecciona tu rol para
        personalizar tu experiencia en HandyHeroes.
      </p>
      {error && (
        <p className="text-red-400 text-center mt-5 font-bold">
          Debes seleccionar un rol
        </p>
      )}
      <div className="mt-12 flex justify-between w-full">
        <div className="mt-12 flex justify-between w-full">
          <button
            onClick={() => onSetRol("client")}
            className={`flex-grow flex flex-col items-center hover:opacity-60 p-2 transition-all duration-200 ${
              rol === "client" ? "outline" : ""
            } outline-1`}
          >
            <img
              className="w-full max-w-[200px] h-full object-cover"
              src="/cliente-logo.png"
              alt=""
            />
            <span className="font-bold text-xl">Cliente</span>
          </button>
          <button
            onClick={() => onSetRol("professional")}
            className={`flex-grow flex flex-col items-center cursor-pointer hover:opacity-60 p-2 transition-all duration-200 ${
              rol === "professional" ? "outline " : ""
            } outline-1   `}
          >
            <img
              className="w-full max-w-[200px] h-auto"
              src="/profesional-logo.png"
              alt=""
            />
            <span className="font-bold text-xl">Profesional</span>
          </button>
        </div>
      </div>

      <div className="mt-5 ">
        <button
          onClick={handleSubmit}
          className="bg-blue-500 w-full text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold"
        >
          SIGUIENTE
        </button>
        <button
          onClick={onCompleteBasicData}
          className="mt-1   border border-gray-500 w-full text-gray-600 px-6 py-3 rounded-md mr-2 transition duration-300 hover:opacity-60 font-bold"
        >
          Volver atrás
        </button>
      </div>
      {errorApi && (
        <p className="text-red-400 text-center mt-5 font-bold">
          Debes seleccionar un rol
        </p>
      )}
    </main>
  );
};

export default ChooseRol;
