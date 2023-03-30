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
							<small>A lot of clients worldwide</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>3 Completed</small>
						</article>
					</div>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Ipsa itaque doloremque suscipit sint neque cupiditate
						quisquam consequatur, voluptatem expedita assumenda,
						molestiae, vitae dignissimos repellat aspernatur
						adipisci cumque a aliquid nemo!
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}
