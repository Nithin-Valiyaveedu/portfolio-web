import React from "react";
import "../App.css";
import "../Box.scss";

const Projects = () => {
  return (
    <>
      <div className="text-heading">Projects</div>

      <div className="container">
        <div className="element-card">
          <div className="front-facing">
            <h1 className="title">Phishector</h1>
            <h2 className="title-desc">
              A Deep learning based phishing detection technique
            </h2>
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
            />
          </div>
          <div className="back-facing">
            <p>
              1.Built a chrome extension.
              <br></br> 2.The model takes into account both HTML and URL
              contents of a webpage.<br></br> 3. Used React, NodeJS, Tensorflow
              js and Python along with Google Colab Pro.
            </p>
            <p>
              <a
                className="btn"
                href="https://en.wikipedia.org/wiki/Copper"
                target="_blank"
              >
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="element-card">
          <div className="front-facing">
            <h1 className="title">CovKart</h1>
            <h2 className="title-desc">
              National Level Hackathon project conducted by IBM and Nasscomm
            </h2>
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg"
            />
          </div>
          <div className="back-facing">
            <p>
              1. Built a web application to facilitate users with essential
              goods during lockdown.
              <br /> 2. The web app is integrated with IBM Watson and Here Maps
              to provide additional functionality
            </p>
            <p>
              <a
                className="btn"
                href="https://en.wikipedia.org/wiki/Copper"
                target="_blank"
              >
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="element-card">
          <div className="front-facing">
            <h1 className="title">Digital Wallet</h1>
            <h2 className="title-desc">
              Mini project for Application Software Development Lab
            </h2>
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            />
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </div>
          <div className="back-facing">
            <p>
              Copper is a chemical element with symbol Cu (from Latin: cuprum)
              and atomic number 29. It is a soft, malleable, and ductile metal
              with very high thermal and electrical conductivity.
            </p>
            <p>
              <a
                className="btn"
                href="https://en.wikipedia.org/wiki/Copper"
                target="_blank"
              >
                More info
              </a>
            </p>
          </div>
        </div>

        <div className="element-card">
          <div className="front-facing">
            <h1 className="title">Incident Creation App</h1>
            <h2 className="title-desc">
               Project done as a part of Incture Inkathon 2021
            </h2>
            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg"
            />

            <img
              className="logo"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            />
          </div>
          <div className="back-facing">
            <p>
              1. Created various dashboard for managing critical incidents
              especially on oil fields.
              <br /> 2. Enabled users to report an incident with photos and
              later on this can be reviewed by the audit team/manager.
              <br /> 3. Used Java Spring for backend, SAP UI5 for frontend and
              SAP Hana Cloud Foundry
            </p>
            <p>
              <a
                className="btn"
                href="https://en.wikipedia.org/wiki/Copper"
                target="_blank"
              >
                More info
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
