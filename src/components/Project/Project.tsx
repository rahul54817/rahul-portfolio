import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

export function Project() {
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

            <div className="body">
              <h3>Multilingual VQA Vision-Language Model</h3>

              <p>
                Fine-tuned Qwen2.5-VL for visual question answering across
                14 languages with optimized preprocessing.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>Python</li>
                <li>Qwen2.5-VL</li>
                <li>Unsloth</li>
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

            <div className="body">
              <h3>
                Serverless Voting Application for Programming Languages
              </h3>

              <p>
                Developed a serverless voting app using React, AWS Lambda,
                API Gateway, and DynamoDB.
              </p>
            </div>

            <footer>
              <ul className="tech-list">
                <li>AWS Lambda</li>
                <li>API Gateway</li>
                <li>DynamoDB</li>
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