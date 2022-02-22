import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import swp from "../../Assets/Projects/swp-2.png";
import sisformasi from "../../Assets/Projects/sisformasi-kenotariatan.png";
import subsit from "../../Assets/Projects/ddd.jpg";
import mockup from "../../Assets/Projects/isometric-psd-web-mockup-1-208.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={subsit}
              isBlog={false}
              title="SubsIt"
              description="SubsIt a Financial Management App, where users can manages subscription, periodical expense and record accounts payable (debts)."
              link="https://github.com/Julhend/subsit-api"
            />
              </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swp}
              isBlog={false}
              title="SYNTHETICWOOD WALL PANEL - SWP"
              description="-"
              link="https://www.swpofficial.co.id/"
            />
        
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sisformasi}
              isBlog={false}
              title="SISFORMASI KENOTARIATAN"
              description="SISFORMASI KENOTARIATAN is a website used by users to request various services available at a notary "
              link="https://sisformasi-kenotariatan.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mockup}
              isBlog={false}
              title="KNOWLEDGE MANAGEMENT SYSTEM - ESCO"
              description="-"
              link="https://github.com/Julhend/knowledge-management-system.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mockup}
              isBlog={false}
              title="SISTEM PREDIKSI PERSEDIAAN BARANG"
              description="-"
              link="https://github.com/Julhend/Sistem-Prediksi-Persediaan-Barang.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
