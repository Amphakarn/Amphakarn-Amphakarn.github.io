import React from 'react';

// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialMedia = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="social-media d-flex justify-content-center">
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/amphakarn-bee-pisuthigomol-b46a3b14/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </a>
          </div>
          <div className="social-links">
            <a
              href="https://github.com/Amphakarn"
              target="_blank"
              rel="noopener noreferrer"
            >
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
              rel="noopener noreferrer"
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
      </div>
    </div>
  );
};

export default SocialMedia;
