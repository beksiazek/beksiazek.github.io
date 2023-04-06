import React from "react";
import "./header.css";
import Cta from "./Cta";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/me.png";

export default function Header() {
	return (
		<header id="header">
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Brian Ksiazek</h1>
				<h5 className="text-light">Web Developer</h5>
				<Cta />
				<HeaderSocials />
				<div className="header__image">	
					<div className="me-image me-img-mask">
						<img src={ME} alt="me" />
					</div>
				</div>
				<a href="#contact" className="scroll__down">Scroll Down  &gt;&gt;</a>
			</div>
		</header>
	);
}
