import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';

// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="home" className="nav-link" href="#">
                Home <span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="about"
                offset={-140}
                className="nav-link"
                href="#"
              >
                about me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="skills"
                offset={-110}
                className="nav-link"
                href="#"
              >
                skills
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="experience"
                offset={-100}
                className="nav-link"
                href="#"
              >
                education & work experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="projects"
                offset={-80}
                className="nav-link"
                href="#"
              >
                projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                smooth={true}
                to="contacts"
                offset={-110}
                className="nav-link"
                href="#"
              >
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
