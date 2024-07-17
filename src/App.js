import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// import Home from "./"
import Header from "./components/header.js";
import Banner from "./components/banner.js";
import SectionMV from "./components/section-mv.js";
import SectionRun from "./components/section-run.js";
import SectionFanCam from "./components/section-fancam.js";
import Footer from "./components/footer.js";
import NewVideo from "./pages/video.js";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pages/video.js" element={<NewVideo />} />
			</Routes>
		</Router>
	);
}

// Componente Home
function Home() {
	return (
		<div className="Home">
			<Header />
			<Banner />
			<main>
				<SectionMV />
				<SectionRun />
				<SectionFanCam />
			</main>
			<Footer />
		</div>
	);
}

export default App;
