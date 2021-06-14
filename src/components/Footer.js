import React from 'react';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons';
// import {
//   fab,
//   faTwitterSquare,
//   faFacebook,
//   faLinkedin,
//   faGithub,
// } from '@fortawesome/free-brands-svg-icons';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'react-share';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About me</a>
                <br />
                <a className="footer-nav">Skills</a>
              </div>
              <div className="col">
                <a className="footer-nav">Education & Experience</a>
                <br />
                <a className="footer-nav">Projects</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className=" col-lg-7 col-md-6 col-sm-6 align-items-center">
            <div className="social-media d-flex justify-content-center">
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/amphakarn-bee-pisuthigomol-b46a3b14/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>
              </div>
              <div className="social-links">
                <a href="https://github.com/Amphakarn" target="_blank">
                  <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
              </div>
              <div className="social-links">
                <a href="mailto:pisuthigomol@yahoo.com">
                  <FontAwesomeIcon icon={['fas', 'envelope']} />
                </a>
              </div>
              <div className="social-links">
                <a
                  href="https://resume.creddle.io/embed/hl0mxm6usnw"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={['fas', 'download']} />
                </a>
                {/* <iframe
                  src="https://resume.creddle.io/embed/hl0mxm6usnw"
                  width="850"
                  height="1100"
                  seamless
                >
                  <FontAwesomeIcon icon={['fas', 'download']} />
                </iframe> */}
              </div>
            </div>
            <p className="pt-3 text-center">
              I'm Bee Pisuthigomol. Let's Talk. <br />
              {/* Copyright&copy;
              {new Date().getFullYear()} */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
