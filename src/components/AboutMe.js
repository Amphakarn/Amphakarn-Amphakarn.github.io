import React from 'react';
import author from '../images/me_glasses.jpg';

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-5 col-sm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            Hi, I’m Bee, a Full-Stack Web Developer transitioning from a
            background in Commercial Printing. I have a strong passion for
            creative problem solving and applying knowledge from computer
            programming, layout design, planning and cost estimating to
            determine the most viable and cost effective methods for projects.
          </p>
          <p>
            In my spare time when I’m not coding, I assist promoting Thai
            culture to the public. You can find me performing and demonstrating
            traditional Thai dance and music on stage in many cities across
            Canada. I also take a direct role in organizing events and teaching
            Thai dance to kids.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
