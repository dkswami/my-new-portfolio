import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import myPortfolio from "../../Assets/Projects/3d-portfolio.png";
import crown from "../../Assets/Projects/crown-clothing.png";
import quiz from "../../Assets/Projects/quiz.png";
import maze from "../../Assets/Projects/maze.png";
import iotSystem from "../../Assets/Projects/iot-breakdown.png";

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
							imgPath={quiz}
							isBlog={false}
							title="Quiz App"
							description="This is a Quiz Application that i developed within a span of 5 days as a part of coding challenge. It has JWT authentication using HTTP only cookie. I haven't focusing on design of this app as i was more focused towards functionality. It also supports Server Side Rendering."
							techUsed="Next.js for frontend, Nest.js for backend api and MongoDB atlas as Database."
							ghLink="https://github.com/dkswami/quiz-app-digiaccel"
							demoLink="https://quiz-frontend-two.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={crown}
							isBlog={false}
							title="Crown Clothing"
							description="Crown Clothing is an E commerce application that includes cart functionality. It has email and google authentication. It also has stripe payment gateway implemented."
							techUsed="React functional components with hooks, Context API, Redux, React-Router-Dom, Styled Components, Netlify and GraphQL."
							ghLink="https://github.com/dkswami/crown-clothing-updated"
							demoLink="https://crown-clothing-e-commerce.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={myPortfolio}
							isBlog={false}
							title="My 3D Portfolio"
							description="Just wanted to learn 3d web animations so i developed this 3D Portfolio Website. Also discovered new learnings in scene, camera, lightening."
							techUsed="HTML, CSS, Three.js, Vite, Netlify"
							ghLink="https://github.com/dkswami/My-3D-portfolio"
							demoLink="https://my-3d-portfolio.netlify.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={maze}
							isBlog={false}
							title="Maze : A social media app"
							description="A complete Social media app including CRUD operation and oAuth2.0 authentication. I developed this as a part of internship training."
							techUsed="React, Context API, React-Router-Dom for frontend, Ruby on Rails for backend API and PostgreSQL as Database."
							ghLink="https://github.com/dkswami/maze-rails-updated"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={iotSystem}
							isBlog={false}
							title="Industrial Wireless Breakdown system"
							description="Developed while working at G.K. Industrial solution. It includes one input device that gives respective department breakdown information and 5 actuator device that would alert respective department of this company."
							techUsed="C++ for programming esp32, firebase realtime database, Nextion HMI touch display, MQTT Broker, Adafruit IO."
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
