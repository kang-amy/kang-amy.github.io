import React from "react";
import "../App.css";
import Card from "../components/card";
import { Link } from "react-router-dom";
import motives from "../assets/motives.png";
import checkIt from "../assets/checkit.png";
import { BiArrowBack } from "react-icons/bi";

const projectData = {
  projects: [
    {
      title: "Check It!",
      techs: "React, Node.js, Express, MongoDB, JavaScript",
      para: "A full-stack habit tracker made with the MERN stack.",
      imageSrc: checkIt,
      url: "https://github.com/kang-amy/check-it",
    },
    {
      title: "News Review",
      techs: "Node.js, Express, JavaScript, Google Cloud Platform",
      para: "A full-stack web app made with the Google Natural Language API to analyze if the news articles of the day are positive or negative.",
      imageSrc: "1",
      url: "https://github.com/kang-amy/news-review",
    },
    {
      title: "Motives",
      techs: "React, Node.js, Express, MongoDB, JavaScript",
      para: "A full-stack event planning platform to host and find Motives.",
      imageSrc: motives,
      url: "https://motivesapp.ca/about",
    },
  ],
};

export default function Projects() {
  return (
    <div className="App">
      <div className="border">
        <br />
        <Link to="/" className="text-link">
          {/* <BiArrowBack /> */}
          back to home
        </Link>
      </div>
      <div className="Main">
        <header className="App-header">
          <p className="font-link">Projects</p>
        </header>
        {projectData.projects.map((project, index) => (
          <Card
            key={index}
            heading={project.title}
            techs={project.techs}
            date={project.date}
            paragraph={project.para}
            imgUrl={project.imageSrc}
            projectLink={project.url}
          ></Card>
        ))}
        <br></br>
      </div>
    </div>
  );
}
