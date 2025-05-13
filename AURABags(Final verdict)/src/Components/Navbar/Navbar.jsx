import React from "react";
import navLogo from "./../../assets/navLogo.png";

import {
  FaCartArrowDown,
  FaMapMarkerAlt,
  FaSearch,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
// import Tostify from "./Tostify";

const Navbar = () => {
  return (
    <>

      <div
        className="text-center font-bold p-1"
        style={{ background: "linear-gradient(90deg, #1e3c72, #2a5298)" }}
      >
        <p className="text-white">Free delivery on all orders in India</p>
      </div>
      <nav className="flex justify-around items-center py-2 gap-x-10 sticky  z-10"
     >
        <Link to="/">
     
  <div className="h-[50px] w-[210px] mb-4 flex items-center justify-center">
    <img
      className="h-full w-full object-cover"
      src={navLogo}
    />
  </div>

        </Link>
        <ul className="flex justify-center items-center gap-x-8">
       
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
              to='/Luggage'
            >
              Luggage
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}//style={{ color: "rgb(51, 51, 51)" }}
              to="/Bagpacks"
            >
              Bagpacks
            </Link>
          </li>
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
              to="/Duffles"
            >
              Duffles
            </Link>
          </li>
         
          <li>
            <Link
              className="font-medium"
              style={{ color: "rgb(51, 51, 51)" }}
              to='/admin/'
            >
              Admin
            </Link>
          </li>
        </ul>
        <ul className="flex justify-center items-center gap-x-8 ml-10">
          <li>
            <Link
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaMapMarkerAlt />
            </Link>
          </li>
          <li className="relative">
            <Link
            to="/login"
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaUser />

             <span className="absolute right-2 top-7"> </span>
            </Link>
          </li>
          <li>
            <Link
              className="text-2xl"
              style={{ color: "rgb(51, 51, 51)" }}
              href=""
            >
              <FaSearch />
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="text-2xl relative"
              style={{ color: "rgb(51, 51, 51)" }}
            >
              <FaCartArrowDown />
              <div className="h-[10px] top-0 end-0 w-[10px] absolute rounded-full bg-red-600 text-white text-[8px] text-center">1</div>
            </Link>
          </li>
        </ul>
      </nav>

    </>
  );
};

export default Navbar;
