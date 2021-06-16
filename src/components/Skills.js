import React from 'react';

const Skills = () => {
  return (
    <div id="skills" className="skills py-5 px-3">
      <div className="d-flex justify-content-center">
        <h1>skills</h1>
      </div>
      <div className="container skills-wrapper col-lg-7 col-sm-9">
        <p>
          <b>Languages:</b> Javascript, HTML, CSS, SQL, React, Ruby, Java
        </p>
        <p>
          <b>Frameworks & Libraries:</b> Node.JS, Express, ReactJS, Axios, AJAX,
          JQuery, EJS, Storybook, PostgreSQL, SASS, Bootstrap, Ruby on Rails
        </p>
        <p>
          <b>Testing:</b> Mocha & Chai, Jest, ESLint, Cypress
        </p>
        <p>
          <b>Graphic Design Software:</b> Adobe Indesign, Adobe Photoshop, Adobe
          Illustrator, Adobe Acrobat Pro, Figma
        </p>
      </div>
    </div>
  );
};

export default Skills;

// Display skills with progress bars

/* <p className="skill-name">
  <b>Javascript</b>
  <ProgressBar done="75" />
</p>

<p className="skill-name">
  <b>React.JS</b>
  <ProgressBar done="65" />
</p>

<p className="skill-name">
  <b>Ruby on Rails</b>
  <ProgressBar done="60" />
</p>

<p className="skill-name">
  <b>HTML</b>
  <ProgressBar done="80" />
</p>

<p className="skill-name">
  <b>CSS</b>
  <ProgressBar done="80" />
</p>

<p className="skill-name">
  <b>PostgreSQL</b>
  <ProgressBar done="75" />
</p>

<p className="skill-name">
  <b>Node.JS</b>
  <ProgressBar done="70" />
</p>

<p className="skill-name">
  <b>Express</b>
  <ProgressBar done="70" />
</p> */
