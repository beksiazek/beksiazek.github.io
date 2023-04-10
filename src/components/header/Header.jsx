import React from "react";
import "./header.css";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

export default function Header(props) {
	const { text } = props;

	return (
		text && (
			<header id="header">
				<div className="container header__container">
					<h5>{text.line1}</h5>
					<h1>{text.line2}</h1>
					<h5 className="text-light">{text.line3}</h5>
					<Cta text={text.cta} />
					<HeaderSocials />
					<div className="header__image">
						<div className="me-image me-img-mask">
							<img src={ME} alt="me" />
						</div>
					</div>
					<a href="#contact" className="scroll__down">
						{text.scroll}
					</a>
				</div>
			</header>
		)
	);
}
