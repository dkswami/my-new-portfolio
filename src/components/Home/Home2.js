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
							LET ME <span className="purple"> INTRODUCE </span> MYSELF
						</h1>
						<p className="home-about-body">
							I'm a Computer Science graduate and I've interest in building real world products
							that can influence a lot of peoples lives.
							<br />
							<br />I am fluent in classics like
							<i>
								<b className="purple"> C++, Javascript and Python. </b>
							</i>
							<br />
							<br />
							<i>
								I use C++ for <b className="purple">Embedded systems,</b> Javascript for
								<b className="purple"> Full stack web development </b>
								and Python for <b className="purple">DSA, ML, AI, NPL and more. </b>
							</i>
							<br />
							<br />
							I like to learn new frameworks and technologies like recently i learned <b className="purple">Nest.js</b> which is a framework for nodejs.
							I also have strong grasp over<i>
								<b className="purple">
									{" "}
									Modern Javascript Library and Frameworks
								</b>
							</i>
							&nbsp; like
							<i>
								<b className="purple"> React.js and Next.js</b>
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
						<h1>FIND ME ON</h1>
						<p>
							Feel free to <span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/dkswami"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							{/* <li className="social-icons">
								<a
									href="https://twitter.com/Soumyajit4419"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiOutlineTwitter />
								</a>
							</li> */}
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/deepak-kumar-swami-030a25136"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/mr.dkswami/"
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
