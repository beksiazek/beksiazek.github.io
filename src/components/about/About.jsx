import React from "react";
import "./about.css";
import ME from "../../assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About(props) {
	const { text } = props;
	return ( text ?
		<section id="about">
			<h5>{text.line1}</h5>
			<h2>{text.line2}</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<div className="about-img-mask">
							<img src={ME} alt="Bald cartoon character" />
						</div>
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>{text.card1.line1}</h5>
							<small>{text.card1.line2}</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>{text.card2.line1}</h5>
							<small>{text.card2.line2}</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>{text.card3.line1}</h5>
							<small>{text.card3.line2}</small>
						</article>
					</div>
					<p>{text.par1}<br/>{text.par2}</p>
					<a href="#contact" className="btn btn-primary">
						{text.talk}
					</a>
				</div>
			</div>
		</section>
	: <section></section>);
}
