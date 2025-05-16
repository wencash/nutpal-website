import { Link } from "react-router-dom";
import { Button } from "../../../components/Button";

export const NotFound = () => {
	const handleScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<section className="relative mx-auto h-screen w-full">
			<div
				className={`px-custom absolute inset-0 top-[25%] mx-auto flex max-w-7xl flex-row items-start gap-5`}
			>
				<div className="mt-5 flex flex-col items-center justify-center">
					<div className="h-5 w-5 rounded-full bg-ga-orangenut-default" />
					<div className="orangenut-gradient-background h-40 w-1 sm:h-80" />
				</div>
				<div>
					<h1 className={`heroHeadText text-ga-white-default`}>
						404<span className="text-ga-blue"></span>
					</h1>
					<p className={`heroSubText mt-2 text-ga-white-darker`}>
						We couldn't find that page.
					</p>
					<div className={`heroSubText mt-2 text-ga-white-default`}>
						<Link to="/" className="cursor-pointer" onClick={handleScrollToTop}>
							<Button
								schema="primary"
								type="button"
								classes="text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2 relative"
							>
								<div className="absolute h-80 w-80 rounded-full bg-ga-orangenut-default/30 blur-3xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-2xl" />
								Back Home
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};
