import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../utils/Store/userSlice";
import "../../public/Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.userData);
  const logoutHandler = () => {
    dispatch(logout(null));
    navigate("/login");
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white py-4" style={{ zIndex: 1000 }}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="no-underline font-bold text-3xl text-white text-decoration-none"
        >
          Online Judge
        </NavLink>
        <ul className="flex items-center space-x-4">
          <li>
            <NavLink
              to="/"
              className="hover:text-yellow-400 hover:bg-gray-700 transition duration-300 ease-in-out rounded p-1"
              activeClassName="text-yellow-400"
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/problems"
              className="hover:text-yellow-400 hover:bg-gray-700 transition duration-300 ease-in-out rounded p-1"
              activeClassName="text-yellow-400"
            >
              Problems
            </NavLink>
          </li>
          {user ? (
            <li className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center focus:outline-none"
              >
                <img
                  src="https://secure.gravatar.com/avatar/d91bcf9a7b821a11a0692fba6b5660ea?s=100&d=mm&r=g"
                  alt="User Avatar"
                  className="rounded-full w-8 h-8"
                />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-md">
                  <div className="py-1">
                    <p className="px-4 py-1 text-gray-800">{user}</p>
                    <button
                      className="block w-full text-left px-4 py-1 text-sm text-gray-800 hover:bg-gray-200 focus:outline-none transition duration-300 ease-in-out"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className="hover:text-yellow-400 hover:bg-gray-700 transition duration-300 ease-in-out rounded p-1"
                activeClassName="text-yellow-400"
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
