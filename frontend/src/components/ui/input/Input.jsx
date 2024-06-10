const Input = ({ value = "", type = "text", placeholder, icon, onChange }) => {
  return (
    <div className="w-full relative">
      <input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={`appearance-none border border-gray-300 rounded w-full py-4 px-3 leading-tight focus:outline-none focus:border-gray-500  text-gray-700 ${
          type === "search" ? "pl-10" : ""
        }`}
      />
      {type === "search" && icon && (
        <span className="absolute top-0 bottom-0 left-0  flex items-center ml-3">
          {icon}
        </span>
      )}
    </div>
  );
};

export default Input;
