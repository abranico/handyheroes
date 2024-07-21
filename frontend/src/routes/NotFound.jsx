import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center mt-3">
      <h2> ¡Ups! La página solicitada no fue encontrada</h2>
      <button className="text-center" onClick={goBackHandler}>
        Volver
      </button>
    </div>
  );
};

export default NotFound;
