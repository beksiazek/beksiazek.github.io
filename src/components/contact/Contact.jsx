import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";

const contact_options = [
	{
		id: 1,
		title: "Email",
		subtitle: "kdummy@gmail.com",
		ref: "mailto:kdummy@gmail.com",
		text: "Send a message",
	},
	{
		id: 2,
		title: "Whatsapp",
		subtitle: "+54 11 6579-9309",
		ref: "https://wa.me/+541165799309",
		text: "Send a message",
	}
];

export default function Contact() {
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>
			<div className="container contact__container">
				<div className="contact__options">
					{contact_options.map(
						({ id, title, subtitle, ref, text }) => {
							return (
								<article id={id} className="contact__option">
									<MdOutlineEmail className="contact__option-icon" />
									<h4>{title}</h4>
									<h5>{subtitle}</h5>
									<a href={ref} target={"_blank"}>{text}</a>
								</article>
							);
						}
					)}
				</div>
			</div>
		</section>
	);
}
