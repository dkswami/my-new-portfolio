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
} from "react-icons/di";
import {
	SiHtml5,
	SiCss3,
	SiExpress,
	SiFirebase,
	SiNextdotjs,
	SiNestjs,
	SiRedux,	
	SiGraphql,
	SiBootstrap,
	SiMaterialui,
	SiSass,
	SiNetlify
} from "react-icons/si";


function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiHtml5 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiCss3 />
			</Col>			
			<Col xs={4} md={2} className="tech-icons">
				<DiJavascript1 />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiNodejs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiMongodb />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiExpress />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<CgCPlusPlus />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNextdotjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<DiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNestjs />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedux />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGraphql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiBootstrap />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMaterialui />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiSass />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiNetlify />
			</Col>
		</Row>
	);
}

export default Techstack;
