import React from "react";

function SectionRun() {
	return (
		<section className="section">
			<div className="section__textos">
				<span>Run BTS</span>
			</div>
			<div className="section__videos">
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/QLo9R-xmiwU?si=QbwFGHF_t8uHkGmT&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/XJDPzNzQ3RE?si=291a2rwgvBfXPIHN&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/RIBC0PX0bg4?si=JZBW4Z60t_FNb450&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</section>
	);
}

export default SectionRun;
