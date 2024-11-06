/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-5">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="/src/assets/nav_logo.png"
            alt="Hidroakuaponik"
            className="h-6"
          />
          <span className="font-bold text-lg">HidroAkuaponik</span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-red-600 font-medium hover:underline">
            Home
          </a>
          <a href="#" className="font-medium hover:underline">
            Product
          </a>
          <a href="#" className="font-medium hover:underline">
            Service
          </a>
          <a href="#" className="font-medium hover:underline">
            FAQs
          </a>
          <a href="#" className="font-medium hover:underline">
            About Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
