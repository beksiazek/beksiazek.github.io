import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Experience(props) {
	const { text } = props;

	return (
		text && (
			<section id="experience">
				<h5>{text.line1}</h5>
				<h2>{text.line2}</h2>
				<div className="container experience__container">
					<div className="experience__frontend">
						<h3>{text.frontend}</h3>
						<div className="experience__content">
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>HTML</h4>
									<small className="text-light">
										{text.intermediate}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>CSS</h4>
									<small className="text-light">
										{text.intermediate}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>JavaScript</h4>
									<small className="text-light">
										{text.intermediate}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>Bootstrap</h4>
									<small className="text-light">
										{text.basic}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>ReactJS</h4>
									<small className="text-light">
										{text.intermediate}
									</small>
								</div>
							</article>
						</div>
					</div>
					<div className="experience__backend">
						<h3>{text.backend}</h3>
						<div className="experience__content">
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>NodeJS</h4>
									<small className="text-light">
										{text.basic}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>Firebase</h4>
									<small className="text-light">
										{text.basic}
									</small>
								</div>
							</article>
							<article className="experience__detail">
								<BsPatchCheckFill className="experience__detail-icon" />
								<div>
									<h4>Python</h4>
									<small className="text-light">
										{text.basic}
									</small>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		)
	);
}
