import React from 'react';
import mTracker from '../images/mTracker.png';
import jungleRails from '../images/jungleRails.png';
import scheduler from '../images/scheduler.png';
import tweeter from '../images/tweeter.png';
import tinyApp from '../images/tinyApp.png';
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import 'react-popupbox/dist/react-popupbox.css';

const Projects = () => {
  // MTracker
  const openPopupboxMTracker = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={mTracker}
          alt="Maintenance Tracker Project"
        />
        <p>
          Maintenance tracking application for small to medium size properties
          built with React. The application also provides statistical data on
          maintenance issues and expenses which assists with business
          forecasting.
        </p>
        <b>Github:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open(
              'https://github.com/Amphakarn/Maintenance-Tickets-Tracker'
            )
          }
        >
          https://github.com/Amphakarn/Maintenance-Tickets-Tracker
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Maintenance Tracker Project',
        },
      },
    });
  };

  const popupboxConfigMTracker = {
    titleBar: {
      enable: true,
      text: 'Maintenance Tracker Project',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Jungle Rails
  const openPopupboxJungleRails = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={jungleRails}
          alt="Jungle Rails Project"
        />
        <p>A mini e-commerce application built with Ruby on Rails</p>
        <b>Github:</b>{' '}
        <a
          className="hyper-link"
          onClick={() =>
            window.open('https://github.com/Amphakarn/jungle-rails')
          }
        >
          https://github.com/Amphakarn/jungle-rails
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Jungle Rails Project',
        },
      },
    });
  };

  const popupboxConfigJungleRails = {
    titleBar: {
      enable: true,
      text: 'Jungle Rails Project',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Scheduler
  const openPopupboxScheduler = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={scheduler}
          alt="Scheduler Project"
        />
        <p>
          A React-based web app allows users to book, cancel and edit
          appointments during the week with one of the available interviewers.
        </p>
        <b>Github:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/Amphakarn/scheduler')}
        >
          https://github.com/Amphakarn/scheduler
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Interview Scheduler Project',
        },
      },
    });
  };

  const popupboxConfigScheduler = {
    titleBar: {
      enable: true,
      text: 'Interview Scheduler Project',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  // Tweeter
  const openPopupboxTweeter = () => {
    const content = (
      <>
        <img
          className="projects-image-popupbox"
          src={tweeter}
          alt="Tweeter Project"
        />
        <p>A simple, single-page Twitter clone using JQuery and Ajax</p>
        <b>Github:</b>{' '}
        <a
          className="hyper-link"
          onClick={() => window.open('https://github.com/Amphakarn/tweeter')}
        >
          https://github.com/Amphakarn/tweeter
        </a>
      </>
    );
    PopupboxManager.open({ content });
    PopupboxManager.update({
      content,
      config: {
        titleBar: {
          text: 'Tweeter Project',
        },
      },
    });
  };

  const popupboxConfigTweeter = {
    titleBar: {
      enable: true,
      text: 'Tweeter Project',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div id="projects" className="projects-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">projects</h1>
        <div className="image-box-wrapper">
          <div className="projects-image-box" onClick={openPopupboxMTracker}>
            <img
              className="projects-image"
              src={mTracker}
              alt="Maintenance Tracker Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={['fas', 'search-plus']}
            />
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxJungleRails}>
            <img
              className="projects-image"
              src={jungleRails}
              alt="Jungle Rails Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={['fas', 'search-plus']}
            />
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxScheduler}>
            <img
              className="projects-image"
              src={scheduler}
              alt="Scheduler Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={['fas', 'search-plus']}
            />
          </div>
          {/* - */}
          <div className="projects-image-box" onClick={openPopupboxTweeter}>
            <img
              className="projects-image"
              src={tweeter}
              alt="Tweeter Project"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon
              className="projects-icon"
              icon={['fas', 'search-plus']}
            />
          </div>
          {/* - */}
          {/* <div className="projects-image-box">
            <img
              className="projects-image"
              src={tinyApp}
              alt="Tiny App Project"
            />
            <div className="overflow"></div>
          </div> */}
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigMTracker} />
      <PopupboxContainer {...popupboxConfigJungleRails} />
      <PopupboxContainer {...popupboxConfigScheduler} />
      <PopupboxContainer {...popupboxConfigTweeter} />
    </div>
  );
};

export default Projects;
