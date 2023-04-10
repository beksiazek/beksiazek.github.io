import React, { useState } from "react";
import text_en from "./text/text_en.json";
import text_es from "./text/text_es.json";
import CV_en from "./assets/cv/CV-BrianKsiazek(EN).pdf";
import CV_es from "./assets/cv/CV-BrianKsiazek(ES).pdf";
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
	const [language, setLanguage] = useState(navigator.language.slice(0, 2));
	const text = language === "en" ? text_en : language === "es" ? text_es : {};
	const cv = language === "en" ? CV_en : language === "es" ? CV_es : "";
	return (
		<>
			<LangSelector language={language} setLanguage={setLanguage} />
			<Nav text={text.nav} />
			<Header cv={cv} text={text.header} />
			<About text={text.about} />
			<Experience text={text.experience} />
			<Services text={text.services} />
			<Portfolio language={language} text={text.portfolio} />
			<Contact text={text.contact} />
			<Footer navText={text.nav} footerText={text.footer} />
		</>
	);
}
