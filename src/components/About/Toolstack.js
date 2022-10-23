import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudio,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiUnrealengine,
  SiAdobe,
  SiGithub,
} from "react-icons/si";


function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudio />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiUnrealengine />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAdobe />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub />
            </Col>
        </Row>
    );
}

export default Toolstack;