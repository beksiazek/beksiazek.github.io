import React from "react";
import "./portfolio.css";
import Momo_img from "../../assets/portfolio/momo-logo.png";
import Central_img from "../../assets/portfolio/central-logo.png";
import Tl_img from "../../assets/portfolio/tl-logo.png";
import This_site_img from "../../assets/portfolio/this-site-logo.png";

const portfolio_items = [
	{
		id: 1,
		image: Momo_img,
		img_alt: "Momomanga logo",
		title: {
			en: "Booking site for Momo Manga Café",
			es: "Sitio de Reservas para Momo Manga Café",
		},
		repo: "",
		link: "https://momomanga.com",
	},
	{
		id: 2,
		image: This_site_img,
		img_alt: "This site's logo",
		title: {
			en: "This, my own Web Developer Portfolio!",
			es: "Este sitio, mi Portfolio Web de Desarrollador!",
		},
		repo: "https://github.com/beksiazek/portfolio-ksiazek",
		link: "",
	},
	{
		id: 3,
		image: Central_img,
		img_alt: "Central TCG logo",
		title: {
			en: "Central TCG, React course Final Project",
			es: "Central TCG, Proyecto Final para un curso de React",
		},
		repo: "https://github.com/beksiazek/central-tcg",
		link: "",
	},
	{
		id: 4,
		image: Tl_img,
		img_alt: "Towerlift logo",
		title: {
			en: "Towerlift, my first JS course Final Project!",
			es: "Towerlift, Proyecto Final de mi primer curso de JS!",
		},
		repo: "https://github.com/beksiazek/towerlift",
		link: "",
	},
];

export default function Portfolio(props) {
	const { text, language } = props;

	return (
		text && (
			<section id="portfolio">
				<h5>{text.line1}</h5>
				<h2>{text.line2}</h2>
				<div className="container portfolio__container">
					{portfolio_items.map(
						({ id, image, img_alt, title, link, repo }) => {
							return (
								<article key={id} className="portfolio__item">
									<div className="portfolio__item-image">
										<img src={image} alt={img_alt} />
									</div>
									<h3
										className={
											title[language].length > 45
												? "long"
												: ""
										}
									>
										{title[language]}
									</h3>
									<div
										className={
											"portfolio__item-cta" +
											(repo === ""
												? " center"
												: link === ""
												? " center"
												: "")
										}
									>
										{repo !== "" ? (
											<a
												href={repo}
												target={"_blank"}
												className="btn btn-primary"
											>
												{text.to_repo}
											</a>
										) : (
											""
										)}
										{link !== "" ? (
											<a
												href={link}
												target={"_blank"}
												className="btn btn-primary"
											>
												{text.to_site}
											</a>
										) : (
											""
										)}
									</div>
								</article>
							);
						}
					)}
				</div>
			</section>
		)
	);
}
