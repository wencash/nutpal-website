import { Footer } from "../../components/Footer";
import { StarsBackground } from "../../components/StarsBackground";
import { LandingInfo } from "./components/LandingInfo";
import {NavBar} from "../../components/NavBar";

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
