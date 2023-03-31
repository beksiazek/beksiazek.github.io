import React from "react";
import { useState } from "react";
import "./nav.css";
import { AiOutlineUser, AiOutlineAppstore } from "react-icons/ai";
import { BiHomeAlt2, BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";

export default function Nav() {
	const [activeNav, setActiveNav] = useState("#");
	return (
		<nav>
			<div className="tooltip">
				<span className="tooltiptext">Hello</span>
				<a
					href="#"
					onClick={() => setActiveNav("#")}
					className={activeNav === "#" ? "active" : ""}
				>
					<BiHomeAlt2 />
				</a>
			</div>
			<div className="tooltip">
				<span className="tooltiptext">About Me</span>
				<a
					href="#about"
					onClick={() => setActiveNav("#about")}
					className={activeNav === "#about" ? "active" : ""}
				>
					<AiOutlineUser />
				</a>
			</div>
			<div className="tooltip">
				<span className="tooltiptext">Experience</span>
				<a
					href="#experience"
					onClick={() => setActiveNav("#experience")}
					className={activeNav === "#experience" ? "active" : ""}
				>
					<BiBook />
				</a>
			</div>
			<div className="tooltip">
				<span className="tooltiptext">Portfolio</span>
				<a
					href="#portfolio"
					onClick={() => setActiveNav("#portfolio")}
					className={activeNav === "#portfolio" ? "active" : ""}
				>
					<AiOutlineAppstore />
				</a>
			</div>
			<div className="tooltip">
				<span className="tooltiptext">Contact</span>
				<a
					href="#contact"
					onClick={() => setActiveNav("#contact")}
					className={activeNav === "#contact" ? "active" : ""}
				>
					<BiMessageSquareDetail />
				</a>
			</div>
		</nav>
	);
}
