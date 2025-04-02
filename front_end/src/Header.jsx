import React from "react";
import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.png"; // Adjust path if necessary

import cartIcon from "/src/assets/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="max-w-16 max-h-16 object-contain" />
            <div className="space-x-10">
              <span className="text-3xl font-bold text-blue-600">Cloth Shop</span>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? 'text-blue-800' : 'text-black'} hover:text-blue-700`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? 'text-blue-800' : 'text-black'} hover:text-blue-700`
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/new-arrivals"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? 'text-blue-800' : 'text-black'} hover:text-blue-700`
                }
              >
                New Arrival
              </NavLink>
              <NavLink
                to="/top-selling"
                className={({ isActive }) =>
                  `text-md font-semibold ${isActive ? 'text-blue-800' : 'text-black'} hover:text-blue-700`
                }
              >
                Top Selling
              </NavLink>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-6">
            <input
              type="search"
              placeholder="Search for products"
              aria-label="Search"
              className="w-130 h-12 px-4 py-2 rounded-full border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <NavLink
              to="/signin"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-900 transition duration-300"
            >
              Login
            </NavLink>

            <NavLink
              to="/signup"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-700 duration-300"
            >
              Sign up
            </NavLink>

            <NavLink
              to="/cart"
              className="flex items-center p-2 hover:bg-pink-200 transition duration-300"
            >
              <img src={cartIcon} alt="Cart Icon" className="h-6 w-6" />
             
            </NavLink>


          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
