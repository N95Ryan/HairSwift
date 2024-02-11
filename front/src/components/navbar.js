import React from "react";

function Navbar() {
  return (
    <nav class="fixed w-full z-20 top-0 start-0 animate-fade-down ">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
            HairSwift
          </span>
        </a>
        <div className="flex justify-around text-lg font-light lg:flex-grow">
            <a href="/services" class="text-white  hover:text-gray-300 px-4 transition-colors duration-300">Nos services</a>
            <a href="/about" class="text-white hover:text-gray-300 px-4 transition-colors duration-300">Réserver</a>
            <a href="/contact" class="text-white hover:text-gray-300 px-4 transition-colors duration-300">Contact</a>
        </div>
        <a href="/login" class="bg-zinc-800 hover:bg-zinc-900 text-white font-semibold py-2 px-4 rounded">Se connecter</a>
      </div>
    </nav>    
    )
    ;
}

export default Navbar;
