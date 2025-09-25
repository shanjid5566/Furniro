import { Link, NavLink } from "react-router-dom";
import logo from "../assets/photos/logo.png";
import { BsPersonExclamation } from "react-icons/bs";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiMenuBurger,
} from "react-icons/ci";
import { useState } from "react";
const Navbar = () => {
  const [active, setActive] = useState(true);
  console.log(active);
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-heading  cursor-pointer  py-1 px-4 btn-hover"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="text-heading py-1 px-4 btn-hover">
          Shop
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className="text-heading  py-1 px-4 btn-hover">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className="text-heading  py-1 px-4 btn-hover">
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-7 px-4">
        <div className="flex justify-between items-center reletive">
          <div className="flex items-center justify-center  lg:ml-0 gap-2">
            <img src={logo} alt="" className="w-6 md:w-12" />
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-heading">
              Furniro
            </p>
          </div>
          {/* Desktop Navigation */}
          <nav className="flex justify-center">
            <ul className="hidden lg:flex  lg:gap-4 xl:gap-12 text-lg font-medium justify-center items-center">
              {links}
            </ul>
          </nav>

          <div className="hidden md:flex items-center gap-11">
            <Link>
              <BsPersonExclamation className="text-3xl text-gray-800 cursor-pointer" />
            </Link>
            <Link>
              <CiSearch className="text-3xl text-gray-800 cursor-pointer" />
            </Link>
            <Link>
              <CiHeart className="text-3xl text-gray-800 cursor-pointer" />
            </Link>
            <Link>
              <CiShoppingCart className="text-3xl text-gray-800 cursor-pointer" />
            </Link>
          </div>
          {/* Mobile Navigation */}
          <div>
            <CiMenuBurger
              className="text-2xl md:text-3xl lg:hidden"
              onClick={() => {
                setActive(!active);
              }}
            />
          </div>

          <nav
            className={`absolute top-22 right-0 w-full lg:hidden
                    transform transition-all duration-300 ease-in-out
                    ${
                      active
                        ? "translate-x-[200%] opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
          >
            <ul className="w-full bg-amber-50 py-3 space-y-4 text-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block w-full px-6 py-2 text-heading btn-hover ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block w-full px-6 py-2 text-heading btn-hover ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block w-full px-6 py-2 text-heading btn-hover ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block w-full px-6 py-2 text-heading btn-hove2 ${
                      isActive ? "active" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
