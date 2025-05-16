import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { StarsBackground } from "../../components/StarsBackground";
import { LandingInfo } from "./components/LandingInfo";

export const Landing = () => {
	return (
		<div className="">
			<StarsBackground />
			<NavBar />
			<LandingInfo />
			<Footer />
		</div>
	);
};
