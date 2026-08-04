import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { repos, about, skills, getInTouch } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import "./Navbar.css";

const Navigation = React.forwardRef((props, ref) => {
  return (
    <Navbar
      ref={ref}
      className="px-3 fixed-top navbar-dark navbar-white"
      expand="lg"
    >
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggler navbar-dark" />
      <Navbar.Collapse className="d-lg-flex justify-content-lg-center navbar-collapse-custom" id="basic-navbar-nav">
      <Navbar.Brand className="navbar-brand dancing-script" href={process.env.PUBLIC_URL + "/#home"}>
        {``}
      </Navbar.Brand>
        <Nav className="navbar-nav mr-auto align-items-lg-center">
          {about.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#aboutme"}
            >
              About
            </NavLink>
          )}
          {repos.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#projects"}
            >
              Projects
            </NavLink>
          )}

          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
            >
              Skills
            </NavLink>
          )}
          {getInTouch.show && getInTouch.navButton?.show !== false && (
            <NavLink
              className={`nav-item lead ${
                getInTouch.navButton?.style === "link"
                  ? "nav-contact-link"
                  : "nav-contact-btn"
              }`}
              href={process.env.PUBLIC_URL + "/#getintouch"}
            >
              {getInTouch.navButton?.label || "Contact"}
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
