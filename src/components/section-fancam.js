import React from "react";

function SectionRun() {
	return (
		<section className="section">
			<div className="section__textos">
				<span>FanCam</span>
			</div>
			<div className="section__videos">
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/nM2MyEN0_oo?si=ZRwUbGinyF1EZaQg&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/GfX62fI1NyA?si=s3TQks3t_WXhmltq&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
				<iframe
					width="380"
					height="200"
					src="https://www.youtube.com/embed/dih52x7wqVU?si=v-j00DfjGkvZUUKb&amp;controls=0"
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
