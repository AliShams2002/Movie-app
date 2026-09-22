const ErrorState = ({ errorMessage, refetch = null }) => {
  return (
    <div className="col-span-6 text-center text-red-500 space-y-4">
      <p className="text-lg font-semibold">{errorMessage}</p>
      {refetch && (
        <button
          className="bg-red-600 text-gray-100 px-2 py-1 rounded-md cursor-pointer"
          onClick={refetch}
        >
          Refetch
        </button>
      )}
    </div>
  );
};

export default ErrorState;
