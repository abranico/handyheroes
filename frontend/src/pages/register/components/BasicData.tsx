import { useForm, useFormContext } from "react-hook-form";
import Input from "@/components/Input";
import { ArrowLeft } from "lucide-react";
import { CountryDropdown } from "@/components/ui/country-dropdown";
import { useEffect, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
interface BasicDataProps {
  onGoBack: () => void;
  onSubmit: (data: any) => void;
}

const BasicData = ({ onGoBack, onSubmit }: BasicDataProps) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const hasErrors = handleErrors(); // Ejecutar handleErrors primero
  //   if (hasErrors) {
  //     console.log("Formulario tiene errores, no se puede completar");
  //     return;
  //   }
  //   console.log("Formulario válido, completando datos básicos");
  //   onCompleteBasicData();
  // };

  const [defaultCountry, setDefaultCountryCountry] = useState(undefined);

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        setDefaultCountryCountry(data.country_code);
      });
  }, []);

  const userSchema = z.object({
    username: z
      .string()
      .min(3, {
        message: "El nombre de usuario debe tener al menos 3 caracteres",
      })
      .max(20, {
        message: "El nombre de usuario debe tener como máximo 20 caracteres",
      }),
    firstname: z.string().min(1, { message: "El nombre es obligatorio" }),
    lastname: z.string().min(1, { message: "El apellido es obligatorio" }),
    email: z
      .string()
      .email({ message: "Se requiere un correo electrónico válido" }),
    password: z
      .string()
      .min(8, { message: "La contraseña debe tener al menos 8 caracteres" }),
  });
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  return (
    <main className="mt-6 max-w-lg mx-auto">
      <button
        onClick={onGoBack}
        className="mb-8 flex items-center text-gray-800 hover:text-gray-500 transition-colors"
      >
        <ArrowLeft className="mr-2" size={20} />
        Volver a selección
      </button>
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Ingresa tu Información Básica
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 w-full pb-12">
        <div className="mb-4 w-full">
          <Input placeholder="Nombre de Usuario" {...register("username")} />
          {errors.username && (
            <span className="text-red-400">{errors.username.message}</span>
          )}
        </div>

        <div className="mb-4 flex flex-col md:flex-row gap-3">
          <div className="w-full">
            <Input placeholder="Nombre" {...register("firstname")} />
            {errors.firstname && (
              <span className="text-red-400">{errors.firstname.message}</span>
            )}
          </div>

          <div className="w-full">
            <Input placeholder="Apellido" {...register("lastname")} />
            {errors.lastname && (
              <span className="text-red-400">{errors.lastname.message}</span>
            )}
          </div>
        </div>

        <div className="mb-4 w-full">
          <Input
            type="date"
            placeholder="Fecha de Nacimiento"
            {...register("birthdate", {
              required: "La fecha de nacimiento es obligatoria",
              validate: (value) => {
                const birthDate = new Date(value);
                const now = new Date();
                const age = now.getFullYear() - birthDate.getFullYear();
                const hasHadBirthday =
                  now.getMonth() > birthDate.getMonth() ||
                  (now.getMonth() === birthDate.getMonth() &&
                    now.getDate() >= birthDate.getDate());
                return age > 18 || (age === 18 && hasHadBirthday)
                  ? true
                  : "Debes tener al menos 18 años";
              },
            })}
          />
          {errors.birthdate && (
            <span className="text-red-400">{errors.birthdate.message}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <CountryDropdown
            placeholder="País"
            defaultValue={defaultCountry}
            onChange={
              (selectedCountry) => setValue("country", selectedCountry.alpha3) // Guardar el código del país
            }
          />
          {errors.country && (
            <span className="text-red-400">{errors.country.message}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <Input
            type="email"
            placeholder="Correo Electrónico"
            {...register("email", {
              required: "Se requiere un correo electrónico válido",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "El formato del correo es inválido",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Contraseña"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
              validate: {
                hasNumber: (value) =>
                  /\d/.test(value) ||
                  "La contraseña debe incluir al menos un número",
                hasUpperCase: (value) =>
                  /[A-Z]/.test(value) ||
                  "La contraseña debe incluir al menos una letra mayúscula",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-400">{errors.password.message}</span>
          )}
        </div>

        <div className="mb-4 w-full">
          <Input
            type="password"
            placeholder="Repetir Contraseña"
            {...register("validationPassword", {
              required: "Debes repetir la contraseña",
              validate: (value) =>
                value === watch("password") || "Las contraseñas no coinciden",
            })}
          />
          {errors.validationPassword && (
            <span className="text-red-400">
              {errors.validationPassword.message}
            </span>
          )}
        </div>

        <div>
          <button
            type="submit"
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
