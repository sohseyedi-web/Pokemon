import * as RiIcon from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="w-full bg-slate-900 border-b border-blue-100 py-4">
      <div className="flex items-center justify-between max-w-7xl px-3 mx-auto text-gray-100">
        <div className="flex items-center gap-x-1 ">
          <RiIcon.RiXingLine size={30} />
          <h1 className="text-3xl font-semibold">Pokemon</h1>
        </div>
        <div className="flex items-center gap-x-2">
          {pathname !== "/" && (
            <Link
              to={"/"}
              className="navBtn hover:scale-110 scale-100 hover:bg-transparent hover:text-white"
            >
              <RiIcon.RiHome4Line size={28} />
            </Link>
          )}
          <span className="navBtn hover:scale-110 scale-100 hover:bg-transparent hover:text-white">
            <RiIcon.RiMoonFill size={28} />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
