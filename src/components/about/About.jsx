import React from "react";
import "./about.css";
import ME from "../../assets/about-me.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>ABout Me</h2>
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
							<h5>Experience</h5>
							<small>1+ Year working</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Clients</h5>
							<small>Always open to new offers!</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>4 Completed</small>
						</article>
					</div>
					<p>
						I like being able to materialize my ideas and help
						others to develop theirs. Always learning, I am a
						self-taught person who is passionate about finding
						creative and original solutions hand in hand with
						optimal results. Plus, I want to be able to
						contribute to the proper development and use of digital
						technologies. <br />If you have a great idea and want to carry
						it out, I hope you will contact me!
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}
