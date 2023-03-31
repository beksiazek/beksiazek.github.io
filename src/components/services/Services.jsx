import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services() {
	return (
		<section id="services">
			<h5>What I Offer</h5>
			<h2>Services</h2>
			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>UI/UX Design</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Define the type of user to whom the product is directed.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Design UI elements and tools.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Test UI elements.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Collaborate with other designers and marketing specialists.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Build a solid engagement between the product and the user.</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Web Development</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>Sistems Design</h3>
					</div>
					<ul className="service__list">
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
						<li>
							<BiCheck className="service__list-icon" />
							<p>Lorem ipsum dolor, sit amet consectetur elit.</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
}
