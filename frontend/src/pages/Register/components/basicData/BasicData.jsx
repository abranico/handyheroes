import { Input } from "../../../../components";

const BasicData = ({
  onCompleteBasicData,
  username,
  handleUsername,
  firstname,
  handleFirstname,
  lastname,
  handleLastname,
  email,
  handleEmail,
  password,
  handlePassword,
  validationPassword,
  handleValidationPassword,
}) => {
  return (
    <main className="mt-6 max-w-lg mx-auto">
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Ingresa tu Información Básica
      </h2>
      <form className="mt-12 w-full">
        <div className="mb-4 w-full">
          <Input
            value={username}
            onChange={handleUsername}
            placeholder="Nombre de Usuario"
          />
        </div>
        <div className="mb-4 flex gap-3">
          <Input
            placeholder="Nombre"
            value={firstname}
            onChange={handleFirstname}
          />
          <Input
            placeholder="Apellido"
            value={lastname}
            onChange={handleLastname}
          />
        </div>
        <div className="mb-4 w-full">
          <Input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePassword}
          />
        </div>
        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Repetir Contraseña"
            value={validationPassword}
            onChange={handleValidationPassword}
          />
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
