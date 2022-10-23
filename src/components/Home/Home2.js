import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WER BIN<span className="purple"> ICH </span>
            </h1>
            <p className="home-about-body">
            Ich habe mich in das Programmieren verliebt und zumindest etwas gelernt, denke ich… 🤷‍♂️
              <br />
              <br />Ich lerne <b className="purple"> C++, Game Development, Game Hacking </b> und Ich kenne
              <i>
                <b className="purple"> Javascript und Python. </b>
              </i>
              <br />
              <br />
              Meine Interessensgebiete liegen im &nbsp;
              <i>
                <b className="purple">Reverse Engineering und in der Game Entwicklung </b> sowie
                 in Bereichen rund um{" "}
                <b className="purple">
                  Deep Learning und Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              Wann immer möglich, setze ich meine Leidenschaft auch für die Entwicklung von 
              Produkten mit
              <b className="purple"> Node.js</b> und
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library und Frameworks
                </b>
              </i>
              &nbsp; wie
              <i>
                <b className="purple"> React.js und Next.js ein</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>KONTAKTIERE MICH</h1>
            <p>
            Fühlen Sie sich frei mich zu <span className="purple">kontaktieren </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Suzuka0x8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/omen0x8"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/suzuka-bash-61b6a4249/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/suzuka.babymetal/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;