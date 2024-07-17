import React from "react";

function SectionMV() {
	return (
		<section className="section">
			<div className="section__textos">
				<span>Principais MVs </span>
			</div>
			<div className="section__videos">
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/gdZLi9oWNZg?si=LI7HeZNRC9qP-xxb&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/LIER2z3DBe8?si=3RFYFJvOIrI0fI5Y&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/WMweEpGlu_U?si=VxzHBGHYqtKrA_RF&amp;controls=0"
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

export default SectionMV;
