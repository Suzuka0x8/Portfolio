import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hallo zusammen, Ich bin <span className="purple">Emilian Treek </span>
                        aus <span className="purple"> Dortmund, Deutschland.</span>
                        <br />Ich besuche das BKO in Datteln, Schwerpunkt Informatik
                        <br />
                        <br />
                        Abgesehen vom Coden, einige andere Aktivitäten, die ich gerne mache!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Games Spielen
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Japanisch lernen
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Gitarre Spielen
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