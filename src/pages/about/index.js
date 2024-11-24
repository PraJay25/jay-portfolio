import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Card } from "react-bootstrap";
import { dataabout, meta, services } from "../../content_option";
import GlobeCanvas from "../../components/GlobeCanvas";

export const About = () => {
  // Split the aboutme text into paragraphs
  const paragraphs = dataabout.aboutme
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");
  const handleResumeClick = () => {
    window.open("/resume/Jay_Full_Stack_Engineer_10+Years.pdf", "_blank");
  };

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="6">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
            <div className="align-items-center">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Col>
          <Col lg="6">
            <GlobeCanvas />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <Row>
              {services.map((data, i) => (
                <Col lg="6" className="mb-4" key={i}>
                  <Card className="service-card">
                    <Card.Body>
                      <Card.Title className="service__title">
                        {data.title}
                      </Card.Title>
                      <Card.Text className="service_desc">
                        {data.description}
                      </Card.Text>
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
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
