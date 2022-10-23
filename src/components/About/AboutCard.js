import React from "react";
import Card from "react-bootstrap/Card";
import { ImArrowRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hallo zusammen, Ich bin <span className="purple">Emilian Treek </span>
                        aus <span className="purple"> Waltrop, Deutschland.</span>
                        <br />Ich besuche das <span className="purple"> BKO in Datteln, Schwerpunkt Informatik </span>
                        <br />
                        <br />
                        Abgesehen vom <span className="purple"> Coden </span>, einige andere Aktivitäten, die ich gerne mache!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImArrowRight /> Games Spielen
                        </li>
                        <li className="about-activity">
                            <ImArrowRight /> Sprachen lernen
                        </li>
                        <li className="about-activity">
                            <ImArrowRight /> Wissen erweitern
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172" }}>
                        "Bemühe dich, Dinge zu Entwickeln, die einen Unterschied machen!"{" "}
                    </p>
                    <footer className="blockquote-footer">Emilian</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;