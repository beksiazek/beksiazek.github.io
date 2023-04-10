import React from "react";
import { HiDownload } from "react-icons/hi";

export default function Cta(props) {
	const { text, cv_en, cv_es } = props;
	return (
		<div className="cta">
			<div className="dropdown">
      <a className="btn">
					{text.cv}
				</a>
				<div className="dropdown-content dropdown-content--animated dropdown-content-6">
					<a className="cv-download" href={cv_en} download>{text.en} <HiDownload /></a>
					<a className="cv-download" href={cv_es} download>{text.es} <HiDownload /></a>
				</div>
			</div>
			<a href="#contact" className="btn btn-primary">
				{text.talk}
			</a>
		</div>
	);
}
