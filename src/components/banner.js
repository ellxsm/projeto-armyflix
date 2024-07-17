import React from "react";

function Banner() {
	return (
		<div className="banner">
			<div className="banner__textos">
				<span>I PURPLE YOU</span>
				<h2>Explosão de Energia e Resistência: MV "Not Today" do BTS</h2>
				<p className="banner__descricao">
					O MV "Not Today" do BTS é uma vibrante demonstração de energia e
					resistência. Lançado em 2017, o vídeo é um hino de empoderamento que
					inspira a lutar contra as adversidades e nunca desistir. Com uma
					coreografia poderosa e cinematografia dinâmica, o BTS cria um
					espetáculo visual que captura a urgência e a determinação da canção.
					As cenas impressionantes, ambientadas em vastos cenários ao ar livre,
					reforçam a mensagem de união e perseverança. "Not Today" é mais do que
					um MV; é um grito de guerra para todos aqueles que se recusam a ser
					derrotados.
				</p>
			</div>
			<div className="banner__video">
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/9DwzBICPhdM?si=LDkV_p9O-2MQA9Mq&amp;controls=0"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					referrerpolicy="strict-origin-when-cross-origin"
					allowfullscreen
				></iframe>
			</div>
		</div>
	);
}

export default Banner;
