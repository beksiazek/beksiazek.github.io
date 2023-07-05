import React from "react";
import "./dropdown.css";

export default function Dropdown({ dropdownContent }) {
	return (
		<div className="dropdown">
			<div className={"btn" + (dropdownContent.primaryStyle === true ? " btn-primary" : "" )}>{dropdownContent.title}</div>
			<div className={"dropdown-content dropdown-content--animated dropdown-content-6" + (dropdownContent.primaryStyle === true ? " dd-primary" : "")}>
				{dropdownContent.items.map(
					({ href, download = false, optClassName = "", text, icon = "", target = "_self" }, index) => {
						return (
							<a
                                key={index}
								className={optClassName}
								href={href}
								download={download}
                                target={target}
							>
								{text} {icon}
							</a>
						);
					}
				)}
			</div>
		</div>
	);
}
