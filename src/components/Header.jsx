import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice"; // Import the logout action

const Header = () => {
  // Use 'userState' since that's where the user data is stored in your Redux store
  const user = useSelector((state) => state.userState?.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="bg-slate-100 py-2 text-slate-900">
      <div className="align-element flex justify-end">
        <div className="flex gap-x-10 justify-center items-center">
          {!user ? (
            <>
              <Link to="/login" className="link link-hover text-xs sm:text-sm">
                Sign in / Guest
              </Link>
              <Link
                to="/register"
                className="link link-hover text-xs sm:text-sm"
              >
                Create an Account
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="link link-hover text-xs sm:text-sm"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
