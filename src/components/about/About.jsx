import React from "react";
import "./about.css";
import { aboutText } from "../../text/textEn";
import ME from "../../assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
	return (
		<section id="about">
			<h5>{aboutText.line1}</h5>
			<h2>{aboutText.line2}</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<div className="about-img-mask">
							<img src={ME} alt="About image" />
						</div>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>{aboutText.card1.line1}</h5>
							<small>{aboutText.card1.line2}</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>{aboutText.card2.line1}</h5>
							<small>{aboutText.card2.line2}</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>{aboutText.card3.line1}</h5>
							<small>{aboutText.card3.line2}</small>
						</article>
					</div>
					<p>{aboutText.par1}<br/>{aboutText.par2}</p>
					<a href="#contact" className="btn btn-primary">
						{aboutText.talk}
					</a>
				</div>
			</div>
		</section>
	);
}
