import React from 'react';
const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>
          education <b>&</b> work experience
        </h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Nov. 2020 - Feb. 2021</h3>
            <h4>lighthouse labs</h4>
            <p className="degree">Diploma in Full Stack Web Development</p>
          </div>
        </div>
        {/* - */}

        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan. 2018 - Mar. 2020</h3>
            <h4>lowe-martin</h4>
            <h4>estimator and planner</h4>
            <ul>
              <li>
                Analyzed and produced estimates and production plans based on
                client specifications while minimizing corporate costs.
              </li>
              <li>
                Worked collaboratively with internal and external teams to
                identify challenges and devise cost-effective methods to produce
                quality products on budget and successfully met deadlines.
              </li>
              <li>
                Troubleshot the Estimating and Planning software systems to
                identify problems or issues, and proposed alternative solutions.
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>July 2010 - Nov. 2017</h3>
            <h4>gilmore printing services</h4>
            <h4>prepress technician</h4>
            <ul>
              <li>
                Researched, developed and maintained an automated system that
                imported data into an Indesign template, saving 30% of
                production time and allowing more flexibility in logistics and
                distribution.
              </li>
              <li>
                Performed web-based application system testing before deployment
                to the production server and reported results to the IT
                department.
              </li>
              <li>
                Administered and maintained a Management Information System
                which generated reports and forecasts for production and senior
                management.
              </li>
              <li>
                Supervised and trained team members, prioritized workload and
                delegated tasks to employees to successfully meet tight
                deadlines.
              </li>
            </ul>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 1999 - June 2001</h3>
            <h4>
              king mongkut's institute of technology ladkrabang - bangkok,
              thailand
            </h4>
            <p className="degree">
              M.Sc Information Technology <br />
              <em>
                Canadian degree equivalency granted by <br /> World Education
                Services
              </em>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
