import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const contact_options = [
	{
		id: 1,
		title: "Email",
		subtitle: "beksiazek@gmail.com",
		ref: "mailto:beksiazek@gmail.com",
	},
	{
		id: 2,
		title: "Whatsapp",
		subtitle: "+54 11 6579-9309",
		ref: "https://wa.me/+541165799309",
	},
];

export default function Contact(props) {
	const { text } = props;

	return (
		text && (
			<section id="contact">
				<h5>{text.line1}</h5>
				<h2>{text.line2}</h2>
				<div className="container contact__container">
					<div className="contact__options">
						{contact_options.map(({ id, title, subtitle, ref }) => {
							return (
								<article key={id} className="contact__option">
									{title === "Email" ? (
										<MdOutlineEmail className="contact__option-icon" />
									) : (
										<BsWhatsapp className="contact__option-icon" />
									)}
									<h4>{title}</h4>
									<h5>{subtitle}</h5>
									<a href={ref} target={"_blank"} rel="noreferrer">
										{text.btn}
									</a>
								</article>
							);
						})}
					</div>
				</div>
			</section>
		)
	);
}
