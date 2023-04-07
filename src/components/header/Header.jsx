import React from "react";
import "./header.css";
import { headerText } from "../../text/textEn";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

console.log(headerText.line1);

export default function Header() {
	return (
		<header id="header">
			<div className="container header__container">
				<h5>{headerText.line1}</h5>
				<h1>{headerText.line2}</h1>
				<h5 className="text-light">{headerText.line3}</h5>
				<Cta text={headerText.cta} />
				<HeaderSocials />
				<div className="header__image">	
					<div className="me-image me-img-mask">
						<img src={ME} alt="me" />
					</div>
				</div>
				<a href="#contact" className="scroll__down">{headerText.scroll}</a>
			</div>
		</header>
	);
}
