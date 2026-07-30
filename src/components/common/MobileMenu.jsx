import { BiSearchAlt, BiUser } from "react-icons/bi";
import { CgClose } from "react-icons/cg";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileMenu = ({
  menuModuleIsOpen,
  menuModuleClose,
  headerBtnValue,
  setActiveHeaderBtn,
  activeHeaderBtn,
}) => {
  return (
    <div className={`md:hidden w-full h-screen bg-black/50 flex items-start justify-start fixed top-0 ${menuModuleIsOpen ? 'right-0' : '-right-full'} z-50 transition-all`}>
      <div className="w-1/2 h-full p-6 bg-[#141414] space-y-5">
        <button className="text-gray-200" onClick={menuModuleClose}>
          <CgClose size={25} />
        </button>
        <nav className="flex flex-col items-start justify-center gap-6 w-full text-sm text-gray-200 pb-5 border-b border-gray-800">
          {headerBtnValue.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveHeaderBtn(item.name)}
              className={`w-full text-start p-2 rounded-md hover:text-red-500 text-gray-200 ${activeHeaderBtn == item.name ? "bg-red-500 font-iranSans-bold" : "bg-transparent font-iranSans-edit"}`}
            >
              {item.value}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1 mt-20">
          <button
            className="flex items-center justify-center gap-1 w-full p-2 bg-blue-500
         hover:bg-blue-600 text-gray-900 rounded-md font-iranSans-bold"
          >
            <IoNotifications size={20} />
          </button>
          <Link to="/account" className="w-full flex items-center">
            <button className="flex items-center justify-center gap-1 w-full p-2 bg-red-500 hover:bg-red-600 text-gray-900 rounded-md font-iranSans-bold">
              <BiUser size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
