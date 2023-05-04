import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";
import { AuthContext } from "../../../providers/AuthProviders";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-xl font-semibold flex items-center justify-between ">
        <h3 className="font-extrabold text-4xl">Japanese Master Chef</h3>

        <div className="inline-flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>

          {user ? (
            <div className="inline-flex gap-2">
              <img
                title={user.displayName}
                className="w-10 h-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
              <button
                onClick={handleLogOut}
                className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:border-gray-800 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link className="inline-flex gap-2" to="/login">
              <HiUserCircle className="text-4xl"></HiUserCircle>
              <button className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-transparent hover:border hover:text-gray-800">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
      <hr className="mt-12 border-t border-gray-700 mb-48" />
    </div>
  );
};

export default NavBar;
