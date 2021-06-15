import React from 'react';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import SocialMedia from './SocialMedia';

const Header = () => {
  return (
    <div id="home" className="header-wrapper">
      <div className="main-info">
        <h1>
          Hi, I'm <b> Bee </b>Pisuthigomol
        </h1>
        <Typed
          className="typed-text"
          strings={[
            'Full-Stack Web Developer',
            'Creative Problem Solving',
            'Analytical',
            'Teamwork',
            'Effective Communication',
            'Customer Focus',
            'Detailed Oriented',
          ]}
          typeSpeed={60}
          backspeed={60}
          loop
        />
        <Link
          smooth={true}
          to="contacts"
          offset={-110}
          className="btn-main-offer"
          href="#contacts"
        >
          contact me
        </Link>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Header;
