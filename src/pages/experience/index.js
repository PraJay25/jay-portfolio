// src/pages/WorkExperience/index.js
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";

const Experiences = [
  {
    company: "Rakuten Inc.",
    duration: "Jan 2020 - Present",
    place: "Tokyo, Japan",
    image: "/work/rakuten.png",
    link: "#", // Add the appropriate link
  },
  {
    company: "Seanergy Digital",
    duration: "Jun 2018 - Sep 2019",
    place: "Hyderabad, India",
    image: "/work/seanergy.png",
    link: "#", // Add the appropriate link
  },

  {
    company: "Deloitte",
    duration: "Jan 2018 - Nov 2019",
    place: "Hyderabad, India",
    image: "/work/deloitte.png",
    link: "/portfolio", // Add the appropriate link
  },
  {
    company: "Brandpier (Boomer)",
    duration: "Sep 2016 - May 2018",
    place: "Hyderabad, India",
    image: "/work/boomer.png",
    link: "/portfolio", // Add the appropriate link
  },
  {
    company: "United Health Group (Optum)",
    duration: "Sep 2019 - Nov 2019",
    place: "Hyderabad, India",
    image: "/work/UHG.png",
    link: "#", // Add the appropriate link
  },

  {
    company: "SureSoft Inc.",
    duration: "Jun 2014 - Sep 2016",
    place: "Hyderabad, India",
    image: "/work/suresoft.png",
    link: "/portfolio", // Add the appropriate link
  },

  // Add more work experiences as needed
];

export const Experience = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Work Experience | Portfolio </title>
          <meta name="description" content="Work Experience" />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Work Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {Experiences.map((experience, index) => (
            <div key={index} className="po_item">
              <img src={experience.image} alt={experience.company} />
              <div className="content">
                <h3>{experience.company}</h3>
                <p>{experience.duration}</p>
                <p>{experience.place}</p>
                <a href={experience.link}>View Work</a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
