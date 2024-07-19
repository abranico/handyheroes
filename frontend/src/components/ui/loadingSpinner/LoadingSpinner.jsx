const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center z-40">
      <div className="bg-black/40 absolute inset-0 flex justify-center items-center">
        <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
