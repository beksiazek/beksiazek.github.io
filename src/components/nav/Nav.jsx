import React from "react";
import "./nav.css";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { BiHomeAlt2, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import useScrollSpy from "../../scripts/scrollSpy";

export default function Nav(props) {
	const { text } = props;
	const sectionIds = ["header"];
	document.querySelectorAll("section").forEach((section) => {
		sectionIds.push(section.getAttribute("id"));
	});
	const activeSectionId = useScrollSpy(sectionIds);

	return (
		text && (
			<nav>
				<div className="tooltip">
					<span className="tooltiptext">{text.header}</span>
					<a
						href="#"
						className={
							activeSectionId === "header" ? "active" : undefined
						}
					>
						<BiHomeAlt2 />
					</a>
				</div>
				<div className="tooltip">
					<span className="tooltiptext">{text.about}</span>
					<a
						href="#about"
						className={
							activeSectionId === "about" ? "active" : undefined
						}
					>
						<AiOutlineUser />
					</a>
				</div>
				<div className="tooltip">
					<span className="tooltiptext">{text.experience}</span>
					<a
						href="#experience"
						className={
							activeSectionId === "experience"
								? "active"
								: undefined
						}
					>
						<BiBook />
					</a>
				</div>
				<div className="tooltip">
					<span className="tooltiptext">{text.services}</span>
					<a
						href="#services"
						className={
							activeSectionId === "services"
								? "active"
								: undefined
						}
					>
						<RiServiceLine />
					</a>
				</div>
				<div className="tooltip">
					<span className="tooltiptext">{text.portfolio}</span>
					<a
						href="#portfolio"
						className={
							activeSectionId === "portfolio"
								? "active"
								: undefined
						}
					>
						<AiOutlineAppstore />
					</a>
				</div>
				<div className="tooltip">
					<span className="tooltiptext">{text.contact}</span>
					<a
						href="#contact"
						className={
							activeSectionId === "contact" ? "active" : undefined
						}
					>
						<BiMessageSquareDetail />
					</a>
				</div>
			</nav>
		)
	);
}
