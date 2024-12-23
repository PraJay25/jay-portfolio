// src/pages/WorkExperience/index.js
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  const handleResumeClick = () => {
    window.open("/resume/Jay_Full_Stack_Engineer_10+Years.pdf", "_blank");
  };
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Projects </h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt={data.title} />
                <div className="title">{data.title}</div>
                <div className="content">
                  <h1>{data.title}</h1>
                  <p>{data.description}</p>
                  <a href={data.link} target="_blank" rel="noopener noreferrer">
                    view project
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <Row className="center-button">
          <Col lg="auto" className="form-group">
            <button
              className="btn ac_btn"
              type="button"
              onClick={handleResumeClick}
            >
              View Resume
            </button>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
