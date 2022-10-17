import React from "react";
import Logo from "../../assets/logo.svg";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between container m-auto py-9">
      <img src={Logo} alt="Logo" width="150" />
      <ul className="flex gap-10 text-lg">
        <li>
          <NavLink
            className="text-primary"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/ "
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="text-primary"
            style={({ isActive }) => ({
              textDecoration: isActive ? "underline" : "none",
            })}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Navbar;
