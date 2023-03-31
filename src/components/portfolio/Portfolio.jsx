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
		title: "Booking site for Momo Manga Café",
		repo: "",
		link: "https://momomanga.com",
	},
	{
		id: 2,
		image: This_site_img,
		img_alt: "This site's logo",
		title: "This, my own Web Developer Portfolio!",
		repo: "https://github.com/beksiazek/portfolio-ksiazek",
		link: "",
	},
	{
		id: 3,
		image: Central_img,
		img_alt: "Central TCG logo",
		title: "Central TCG, React course Final Project",
		repo: "https://github.com/beksiazek/central-tcg",
		link: "",
	},
	{
		id: 4,
		image: Tl_img,
		img_alt: "Towerlift logo",
		title: "Towerlift, my first JS course Final Project!",
		repo: "https://github.com/beksiazek/towerlift",
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
								<h3 className={title.length > 45 ? "long" : ""}>{title}</h3>
								<div
									className={
										"portfolio__item-cta" +
										(repo === "" ? " center" : (link === "" ? " center" : ""))
									}
								>
									{repo !== "" ? (
										<a
											href={repo}
											target={"_blank"}
											className="btn btn-primary"
										>
											Github Repo
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
											Go to the Site
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
	);
}
