import React from "react";
import Dropdown from "../dropdown/Dropdown";
import { HiDownload } from "react-icons/hi";

export default function Cta(props) {
	const { text, cv_en, cv_es } = props;

	const dropdownContent = {
		title: text.cv,
		items: [
			{
				href: cv_en,
				download: true,
				optClassName: "cv-download",
				text: text.en,
				icon: <HiDownload />,
			},
			{
				href: cv_es,
				download: true,
				optClassName: "cv-download",
				text: text.es,
				icon: <HiDownload />,
			},
		]
	};

	return (
		<div className="cta">
			<Dropdown dropdownContent={dropdownContent} />
			<a href="#contact" className="btn btn-primary">
				{text.talk}
			</a>
		</div>
	);
}
