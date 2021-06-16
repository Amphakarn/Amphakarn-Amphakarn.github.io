import React from 'react';
import { Link } from 'react-scroll';
import SocialMedia from './SocialMedia';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="row">
              <div className="col ms-4">
                <Link smooth={true} to="home" className="footer-nav">
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-140}
                  className="footer-nav"
                >
                  About me
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="skills"
                  offset={-110}
                  className="footer-nav"
                >
                  Skills
                </Link>
              </div>
              <div className="col">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-100}
                  className="footer-nav"
                >
                  Education & Experience
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="projects"
                  offset={-80}
                  className="footer-nav"
                >
                  Projects
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="contacts"
                  offset={-110}
                  className="footer-nav"
                >
                  Contacts
                </Link>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className=" col-lg-6 col-md-6 col-sm-6 align-items-center">
            <SocialMedia />

            <p className="pt-2 text-center">
              I'm Bee Pisuthigomol. Let's Talk. <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
