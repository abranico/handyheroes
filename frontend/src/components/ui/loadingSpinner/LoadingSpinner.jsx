const LoadingSpinner = () => {
  return (
    <div className="absolute inset-0 -z-30">
      <div className="flex h-full justify-center items-center ">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
