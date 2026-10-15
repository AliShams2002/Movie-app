import Button from "./Button";

const ErrorState = ({ errorMessage, refetch = null }) => {
  return (
    <div className="col-span-6 text-center text-red-500 space-y-4">
      {/* Message */}
      <p className="text-lg font-semibold">{errorMessage}</p>
      {/* Refetch btn */}
      {refetch && (
        <Button
          type="button"
          title="Refetch"
          action={refetch}
          className="bg-red-600 text-gray-100 px-2 py-1 rounded-md cursor-pointer"
        />
      )}
    </div>
  );
};

export default ErrorState;
