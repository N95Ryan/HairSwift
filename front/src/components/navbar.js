import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <nav className="fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
            {isLoginPage ? <span className="text-black">HairSwift</span> : "HairSwift"}
          </span>
        </Link>
        <div className="flex justify-around text-lg font-light lg:flex-grow font-semibold">
            <Link to="/services" className={`nav-link ${isLoginPage ? 'text-black' : 'text-white'}`}>Nos services</Link>
            <Link to="/reservation" className={`nav-link ${isLoginPage ? 'text-black' : 'text-white'}`}>Réserver</Link>
        </div>
        <Link to="/login" className="bg-zinc-800 hover:bg-zinc-900 text-white font-semibold py-2 px-4 rounded">Se connecter</Link>
      </div>
    </nav>    
  );
}

export default Navbar;
