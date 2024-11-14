/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 p-3">
          <img
            src="/src/assets/nav_logo.png"
            alt="Hidroakuaponik"
            className="h-12"
          />
          <a href="#">
            <span className="font-bold text-2xl">HidroAkuaponik</span>
          </a>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-9 p-3">
          <a href="#" className="text-red-600 font-medium hover:underline">
            Beranda
          </a>
          <a href="#" className="font-medium hover:underline">
            Produk
          </a>
          <a href="#" className="font-medium hover:underline">
            Solusi
          </a>
          <a href="#" className="font-medium hover:underline">
            Pertanyaan
          </a>
          <a href="#" className="font-medium hover:underline">
            Tentang Kami
          </a>
          <a href="#">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white">
              Masuk
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
