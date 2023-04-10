import React, { useState } from "react";
import text_en from "./text/text_en.json";
import text_es from "./text/text_es.json";
import cv_en from "./assets/cv/CV-BrianKsiazek(EN).pdf";
import cv_es from "./assets/cv/CV-BrianKsiazek(ES).pdf";
import LangSelector from "./components/langSelector/LangSelector";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function App() {
	const [language, setLanguage] = useState(navigator.language.slice(0, 2) || "en");
	const text = language === "en" ? text_en : language === "es" ? text_es : text_en;

	return (
		<>
			<LangSelector language={language} setLanguage={setLanguage} />
			<Nav text={text.nav} />
			<Header cv_en={cv_en} cv_es={cv_es} text={text.header} />
			<About text={text.about} />
			<Experience text={text.experience} />
			<Services text={text.services} />
			<Portfolio language={language} text={text.portfolio} />
			<Contact text={text.contact} />
			<Footer navText={text.nav} footerText={text.footer} />
		</>
	);
}
