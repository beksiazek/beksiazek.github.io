import React from "react";
import "./portfolio.css";
import Momo_img from "../../assets/portfolio/momo-logo.png";
import This_site from "../../assets/portfolio/this-site.png";

const portfolio_items = [
	{
		id: 1,
		image: Momo_img,
		img_alt: "Momomanga logo",
		title: "Booking site for Momo manga café",
		repo: "",
		link: "https://momomanga.com",
	},
	{
		id: 2,
		image: This_site,
		img_alt: "This site's logo",
		title: "This, my own Web Portfolio!",
		repo: "https://github.com/beksiazek/portfolio-ksiazek",
		link: "",
	}
];

export default function Portfolio() {
	return (
		<section id="portfolio">
			<h5>My Recent Work</h5>
			<h2>Porfolio</h2>
			<div className="container portfolio__container">
				{portfolio_items.map(
					({ id, image, img_alt, title, link, repo }) => {
						return (
							<article key={id} className="portfolio__item">
								<div className="portfolio__item-image">
									<img src={image} alt={img_alt} />
								</div>
								<h3>{title}</h3>
								<div
									className={
										"portfolio__item-cta" +
										(repo === "" ? " center" : "")
									}
								>
									{repo !== "" ? (
										<a
											href={repo}
											target={"_blank"}
											className="btn btn-primary"
										>
											Github Repository
										</a>
									) : (
										""
									)}
									<a
										href={link}
										target={"_blank"}
										className={"btn btn-primary"}
									>
										Go to the Site
									</a>
								</div>
							</article>
						);
					}
				)}
			</div>
		</section>
	);
}
