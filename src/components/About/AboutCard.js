import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am <span className="purple">Deepak kumar swami </span>
						from <span className="purple"> Delhi, India.</span>
						<br />I am working as a software developer at Geekster located in Gurugram.
						<br />
						<br />
						I am a passionate programmer and always ready to learn new things. I love to explore new technologies and leverage them to solve real-life problems.
						<br />
						<br />
						Apart from coding, some other activities that I love to do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Video Games
						</li>
						<li className="about-activity">
							<ImPointRight /> Exploring new Domains
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing Football
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"I Strive to build things that make a difference!"{" "}
					</p>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
