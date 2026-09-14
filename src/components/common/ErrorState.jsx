import React from "react";

const ErrorState = ({ refetch }) => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2">
      <p>Error loading data; please try again!</p>
      <button
        className="bg-red-700 text-gray-100 rounded-lg cursor-pointer"
        onClick={refetch}
      >
        Refetch
      </button>
    </div>
  );
};

export default ErrorState;
