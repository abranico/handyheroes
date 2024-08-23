import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-10 text-xl">
      <h2> ¡Ups! La página solicitada no fue encontrada</h2>
      <button
        className="mt-5 text-center text-blue-700"
        onClick={goBackHandler}
      >
        Volver
      </button>
    </div>
  );
};

export default NotFound;
