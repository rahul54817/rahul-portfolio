import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import project11 from "../../assets/project-1-1.png";
import project12 from "../../assets/project-1-2.png";
import project13 from "../../assets/project-1-3.png";

import project21 from "../../assets/project-2-1.png";
import project22 from "../../assets/project-2-2.png";
import project23 from "../../assets/project-2-3.png";
import project24 from "../../assets/project-2-4.png";
import project25 from "../../assets/project-2-5.png";

import { useState } from "react";

export function Project() {
  const centralImages = [project11, project12, project13];
  const sandeshImages = [project21, project22, project23, project24, project25];

  const [currentImage, setCurrentImage] = useState(0);
  const [currentSandeshImage, setCurrentSandeshImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === centralImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? centralImages.length - 1 : prev - 1
    );
  };
  const nextSandeshImage = () => {
    setCurrentSandeshImage((prev) =>
      prev === sandeshImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevSandeshImage = () => {
    setCurrentSandeshImage((prev) =>
      prev === 0 ? sandeshImages.length - 1 : prev - 1
    );
  };
  return (
    <Container id="project">
      <h2>My Projects</h2>

      <div className="projects">

        {/* Project 1 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/rahul54817"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="GitHub" />
                </a>
              </div>
            </header>

            {/* Image Section */}
            <div className="project-image">
              <img
                src={centralImages[currentImage]}
                alt="Project Screenshot"
              />

              <div className="image-buttons">
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
              </div>
            </div>

            <div className="body">
              <h3>Car Rental Service</h3>

              <p>
                A full-stack car rental platform that allows users to browse, book, and manage rental vehicles online. Built with ReactJs, NodeJs, and MongoDB, featuring responsive UI, authentication, and booking management functionality.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 2 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>

                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/rahul54817"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>

            {/* Image Section */}
            <div className="project-image">
              <img
                src={sandeshImages[currentSandeshImage]}
                alt="Project Screenshot"
              />

              <div className="image-buttons">
                <button onClick={prevSandeshImage}>Prev</button>
                <button onClick={nextSandeshImage}>Next</button>
              </div>
            </div>

            <div className="body">
              <h3>
                Sanesh Pharma
              </h3>

              <p>
                A pharma e-commerce web application developed for managing medicines, categories, and online orders. Built using React, NodeJs, ExpressJs, and MongoDB with secure admin management and user-friendly product browsing.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 3 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>

                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">

                <a
                  href="https://github.com/rahul54817"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="External link" />
                </a>

              </div>
            </header>

            <div className="body">
              <h3>GeniusBot: AI-Powered Assistance with PDF Insight</h3>

              <p>
                Developed an interactive chatbot application using Streamlit,
                OpenAI GPT-3.5, and PyPDF2.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 4 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>

                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">

                <a
                  href="https://github.com/rahul54817"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>

                <a
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="External link" />
                </a>

              </div>
            </header>

            <div className="body">
              <h3>
                MediBook: Medical Appointment Scheduler with Health History
              </h3>

              <p>
                Developed a secure medical appointment management platform
                with CRUD functionality and role-based access control.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>PHP</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>MySQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* Project 5 */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">

            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>

                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>

              <div className="project-links">
                <a
                  href="https://github.com/rahul54817"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>

            <div className="body">
              <h3>Credit Risk Analysis Project</h3>

              <p>
                Developed a highly accurate credit risk classification model
                using XGBoost and advanced preprocessing techniques.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>XGBoost</li>
                <li>Pandas</li>
                <li>Matplotlib</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      </div>
    </Container>
  );
}