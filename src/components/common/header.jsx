import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav className="d-flex justify-content-start mt-4 mb-4">
      <NavLink exact to="/" activeStyle={activeStyle} className="mr-1 rmv-udr">
        Home
      </NavLink>
      {"|"}
      <NavLink
        to="/courses"
        activeStyle={activeStyle}
        className="mr-1 ml-1 rmv-udr"
      >
        Courses
      </NavLink>
      {"|"}
      <NavLink to="/about" activeStyle={activeStyle} className="ml-1 rmv-udr">
        About
      </NavLink>
    </nav>
  );
};

export default Header;
