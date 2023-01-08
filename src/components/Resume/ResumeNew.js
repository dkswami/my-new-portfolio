import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/Deepak_Swami_SDE1.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const resumeLink ="https://drive.google.com/file/d/1jyq1y0bEfGhOjvNiUhg0lyliZWSyYIfN/preview";

function ResumeNew() {
	return (
		<div>
			<Container fluid className="resume-section">
				<Particle />
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
				<iframe className="resume-preview" src={resumeLink} width="640" height="480" allow="autoplay"></iframe>
			</Container>
		</div>
	);
}

export default ResumeNew;
