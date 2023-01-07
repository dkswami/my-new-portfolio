import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiLinux,
	SiVisualstudiocode,
	SiPostman,
	SiHeroku,
	SiVercel,
	SiWebstorm
} from "react-icons/si";
import { 
	FaAws,
	FaDocker,
} from "react-icons/fa";

function Toolstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiLinux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVisualstudiocode />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiWebstorm />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostman />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiVercel />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiHeroku />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaAws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<FaDocker />
			</Col>
		</Row>
	);
}

export default Toolstack;
