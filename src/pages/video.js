import React from "react";
import Header from "../components/header.js";
import Footer from "../components/footer.js";

const NewVideo = () => {
	return (
		<div>
			<Header />
			<div className="form">
				<form className="form__container">
					<p>Novo Vídeo</p>
					<div className="form__title">
						<label>Título:</label>
						<input placeholder="Título do Vídeo..."></input>
					</div>
					<div className="form__linkvideo">
						<label>Link do Vídeo (Youtube):</label>
						<input placeholder="Link do Vídeo..."></input>
					</div>
					<div className="form__linkimg">
						<label>Link da Imagem:</label>
						<input placeholder="Link da Imagem..."></input>
					</div>
					<div className="form__btn">
						<button>Enviar</button>
						<button>Cancelar</button>
					</div>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default NewVideo;
