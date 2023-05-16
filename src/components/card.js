import "../styles/card.css";
import React from "react";
import github from "../assets/github.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Card = ({ heading, techs, paragraph, imgUrl, projectLink }) => {
  return (
    <Container fluid>
      <Row className="card">
        <Col className="card-img" md={4}>
          <img className="proj-img" src={imgUrl} />
        </Col>
        <Col className="card-desc" md={7}>
          <p className="card-title">
            {heading} &nbsp;
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              <img className="card-link" src={github}></img>
            </a>
          </p>
          <p className="card-tech">
            <i>{techs}</i>
          </p>
          <p className="card-text">{paragraph}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Card;
