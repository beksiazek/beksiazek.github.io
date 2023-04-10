import React from "react";
import { MdLanguage } from "react-icons/md";
import "./langSelector.css";

export default function LangSelector(props) {
	const { language, setLanguage } = props;
	return (
		<div className="lang-selector-container">
			{language === "es" ? (
				<a className="active">ES</a>
			) : (
				<a
					onClick={() => {
						setLanguage("es");
					}}
				>
					ES
				</a>
			)}
			<div className="v-line"></div>
			{language === "en" ? (
				<a className="active">EN</a>
			) : (
				<a
					onClick={() => {
						setLanguage("en");
					}}
				>
					EN
				</a>
			)}
			<MdLanguage />
		</div>
	);
}
