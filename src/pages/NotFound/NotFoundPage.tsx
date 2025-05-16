import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { StarsBackground } from "../../components/StarsBackground";
import { NotFound } from "./components/NotFound";

export const NotFoundPage = () => {
	return (
		<>
			<div className="bg-primary relative z-0">
				<div className="bg-primary relative bg-cover bg-center bg-no-repeat">
					<StarsBackground />
					<NavBar />
					<NotFound />
					<Footer />
				</div>
				<div className="relative z-0"></div>
			</div>
		</>
	);
};
