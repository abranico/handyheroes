export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center">
        <div className="border-4 border-gray-200 border-t-4 border-t-blue-500 rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-lg text-gray-700">Loading...</p>
      </div>
    </div>
  );
}
