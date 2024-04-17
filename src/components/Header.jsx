import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-100 py-2 text-slate-900 ">
      <div className="align-element flex justify-center">
        {/* USER */}
        {/* LINKS */}
        <div className="flex gap-x-10 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Sign in / Guest
          </Link>
          <Link to="/register" className="link link-hover text-xs sm:text-sm">
            Create an Account
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
