import React from 'react';
import mTracker from '../images/mTracker.png';
import jungleRails from '../images/jungleRails.png';
import scheduler from '../images/scheduler.png';
import tweeter from '../images/tweeter.png';
import tinyApp from '../images/tinyApp.png';

const Portfolio = () => {
  return (
    <div className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={mTracker}
              alt="Maintenance Tracker Project"
            />
            <div className="overflow"></div>
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={jungleRails}
              alt="Jungle Rails Project"
            />
            <div className="overflow"></div>
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={scheduler}
              alt="Scheduler Project"
            />
            <div className="overflow"></div>
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={tweeter}
              alt="Tweeter Project"
            />
            <div className="overflow"></div>
          </div>
          {/* - */}
          {/* <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={tinyApp}
              alt="Tiny App Project"
            />
            <div className="overflow"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
