import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

export default function Services(props) {
	const { text } = props;

	return (
		text && (
			<section id="services">
				<h5>{text.line1}</h5>
				<h2>{text.line2}</h2>
				<div className="container services__container">
					<article className="service">
						<div className="service__head">
							<h3>{text.ui_ux.title}</h3>
						</div>
						<ul className="service__list">
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.ui_ux.items[0]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.ui_ux.items[1]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.ui_ux.items[2]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.ui_ux.items[3]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.ui_ux.items[4]}</p>
							</li>
						</ul>
					</article>
					<article className="service">
						<div className="service__head">
							<h3>{text.web.title}</h3>
						</div>
						<ul className="service__list">
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.web.items[0]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.web.items[1]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.web.items[2]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.web.items[3]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.web.items[4]}</p>
							</li>
						</ul>
					</article>
					<article className="service">
						<div className="service__head">
							<h3>{text.systems.title}</h3>
						</div>
						<ul className="service__list">
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.systems.items[0]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.systems.items[1]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.systems.items[2]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.systems.items[3]}</p>
							</li>
							<li>
								<BiCheck className="service__list-icon" />
								<p>{text.systems.items[4]}</p>
							</li>
						</ul>
					</article>
				</div>
			</section>
		)
	);
}
