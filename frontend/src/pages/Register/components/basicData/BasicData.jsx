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
  errors,
  handleErrors,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = handleErrors(); // Ejecutar handleErrors primero
    if (hasErrors) {
      console.log("Formulario tiene errores, no se puede completar");
      return;
    }
    console.log("Formulario válido, completando datos básicos");
    onCompleteBasicData();
  };

  return (
    <main className="mt-6 max-w-lg mx-auto">
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Ingresa tu Información Básica
      </h2>
      <form className="mt-12 w-full pb-32" onSubmit={handleSubmit}>
        <div className="mb-4 w-full">
          <Input
            value={username}
            onChange={handleUsername}
            placeholder="Nombre de Usuario"
          />
          {errors.username && (
            <span className="text-red-400">
              El nombre de usuario es obligatorio
            </span>
          )}
        </div>
        <div className="mb-4 flex gap-3">
          <div className="w-full">
            <Input
              placeholder="Nombre"
              value={firstname}
              onChange={handleFirstname}
            />
            {errors.firstname && (
              <span className="text-red-400">El nombre es obligatorio</span>
            )}
          </div>

          <div className="w-full">
            <Input
              placeholder="Apellido"
              value={lastname}
              onChange={handleLastname}
            />
            {errors.lastname && (
              <span className="text-red-400">El apellido es obligatorio</span>
            )}
          </div>
        </div>
        <div className="mb-4 w-full">
          <Input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={handleEmail}
          />
          {errors.email && (
            <span className="text-red-400">
              Se requiere un correo electrónico válido
            </span>
          )}
        </div>
        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={handlePassword}
          />
          {errors.password && (
            <span className="text-red-400">
              La contraseña debe tener al menos 8 caracteres
            </span>
          )}
        </div>
        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Repetir Contraseña"
            value={validationPassword}
            onChange={handleValidationPassword}
          />
          {errors.validationPassword && (
            <span className="text-red-400">Las contraseñas no coinciden</span>
          )}
        </div>
        <div>
          <button className="bg-blue-500 w-full text-white px-6 py-3 rounded-md mr-2 transition duration-300 hover:bg-blue-600 font-bold">
            SIGUIENTE
          </button>
        </div>
      </form>
    </main>
  );
};

export default BasicData;
