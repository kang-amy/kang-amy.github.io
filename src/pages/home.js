import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import mail from "../assets/mail.png";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  const resumeLink =
    "https://drive.google.com/file/d/1uSvYFHD9oxQqiWLmzKxdIvnLhgbDzqnf/view?usp=share_link";
  const githubLink = "https://github.com/kang-amy";
  const linkedInLink = "https://www.linkedin.com/in/kang-amy/";
  const mailLink = "mailto:amy.kang@uwaterloo.ca";
  const mgteLink =
    "https://uwaterloo.ca/future-students/programs/management-engineering#:~:text=In%20contrast%2C%20Management%20Engineering%20provides,business%20more%20efficiently%20and%20effectively.";

  return (
    <div className="App">
      <div className="border"></div>
      <div className="Main">
        <header className="App-header">
          <p className="font-link">Hey... I'm Amy!</p>
        </header>

        <div className="text">
          <div className="font-link">
            <p>I am Currently...</p>
            <div className="stagger">
              studying in my 2nd year of{" "}
              <a className="text-link" href={mgteLink} target="_blank">
                Management Engineering
              </a>{" "}
              at the University of Waterloo
              <p className="stagger">
                finishing up my term working as a Software Engineering Intern at
                OpenText
              </p>
              spending my free time reading as much as I can &amp; getting gains
              in the gym
            </div>
          </div>
        </div>

        <div className="App-footer">
          <div className="Sections">
            <a target="blank" className="text-link" href={resumeLink}>
              resume
            </a>
            <Link to="/experience" className="text-link">
              experience
            </Link>
            <Link to="/projects" className="text-link">
              projects
            </Link>
          </div>
          <div className="Icons-container">
            <a href={githubLink} target="blank">
              <img src={github} alt="Github" className="Icons" />
            </a>
            <a href={linkedInLink} target="blank">
              <img src={linkedin} alt="LinkedIn" className="Icons" />
            </a>
            <a href={mailLink} target="blank">
              <img src={mail} alt="Email" className="Icons" />
            </a>
          </div>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
}
