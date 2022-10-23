import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJavascript,
} from "react-icons/di";
import {
  SiPytorch,
  SiFirebase,
  SiNextdotjs,
  SiC,
  SiCplusplus,
  SiKalilinux,
  SiHtml5,
  SiCss3,
  SiReact,
  SiJavascript,
  SiBootstrap,
  SiPython,
} from "react-icons/si";
import {
	FaNode,
	FaReact,
	FaPython,
	FaGitAlt,
} from "react-icons/fa"
import {
	IoLogoJavascript
} from "react-icons/io"

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiCplusplus />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiC />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <IoLogoJavascript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCss3 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaNode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPython />
            </Col>
        </Row>
    );
}

export default Techstack;