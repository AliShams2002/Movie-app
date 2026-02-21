import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const SearchModule = ({close}) => {
  return (
    <div className="w-full h-screen bg-black/50 flex items-start justify-center fixed top-0 z-50 py-20">
      <div className="max-w-xl w-full py-2 px-4 rounded-lg bg-[#141414] space-y-5">
        <div className="flex items-center justify-center gap-2 bg-[#1f1f1f] border p-2 border-gray-400 rounded-lg">
          <button className="text-center text-gray-400 hover:text-white transition-all">
            <BiSearchAlt size={25} />
          </button>
          <input
            type="search"
            className="w-full bg-transparent focus:outline-none text-gray-200"
            placeholder="Search movie or series"
          />
          <button className="text-yellow-400 transition-all" onClick={close}>
            <CgClose size={25} />
          </button>
        </div>
        <div className="flex items-center flex-col justify-center gap-1 pb-5">
          <h3 className="text-gray-400 self-start">Results</h3>
          <span className="text-gray-100">no Item</span>
        </div>
      </div>
    </div>
  );
};

export default SearchModule;
