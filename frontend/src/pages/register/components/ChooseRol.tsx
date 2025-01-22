import { Briefcase, ChevronRight, UserRound } from "lucide-react";

interface ChooseRolProps {
  onChooseRol: (rol: string) => void;
}

const ChooseRol: React.FC<ChooseRolProps> = ({ onChooseRol }) => {
  return (
    <main className="mt-6 max-w-xl mx-auto  pb-11">
      <h2 className="font-bold text-3xl text-gray-600 text-center ">
        Selecciona tu Rol en HandyHeroes
      </h2>

      <div className="mt-12 flex justify-between w-full">
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <button
            onClick={() => onChooseRol("client")}
            className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <UserRound
                size={40}
                className="text-blue-600 group-hover:text-blue-700"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-700 transition-colors duration-300">
              Cliente
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Busco contratar servicios profesionales
            </p>
            <ChevronRight className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => onChooseRol("professional")}
            className="bg-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center group"
          >
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors duration-300">
              <Briefcase
                size={40}
                className="text-purple-600 group-hover:text-purple-700"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
              Profesional
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Quiero ofrecer mis servicios
            </p>
            <ChevronRight className="text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ChooseRol;
