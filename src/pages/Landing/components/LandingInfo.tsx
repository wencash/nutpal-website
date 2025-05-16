import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { community, goal, group, wave } from "../../../assets";
import { Button } from "../../../components/Button";
import { LandingSection } from "./LandingSection";

export const LandingInfo = () => {
	return (
		<main className="px-custom mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-20 py-16">
			<img
				src={wave}
				alt="wave"
				className="absolute left-0 right-0 top-10 h-screen object-cover opacity-10 saturate-0 md:w-screen md:object-contain"
			/>

			<section className="relative flex min-h-[75vh] animate-fade-up flex-col items-center justify-center gap-8 md:min-h-[65vh]">
				<div className="flex flex-col items-center justify-center gap-8">
					<h1 className="text-ga-white-default` text-5xl font-bold md:text-7xl">
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</h1>

					<p
						className={`bg-gradient-to-tr bg-clip-text text-center text-3xl text-ga-white-darker`}
					>
						A community-driven project for
						<br className="hidden sm:block" /> engaging AI chat, creative
						roleplay,
						<br className="hidden sm:block" /> and everything in between.
						<br className="hidden sm:block" />{" "}
						<br className="mb-4 hidden sm:block" />
					</p>
				</div>

				<div className="group flex flex-col items-center gap-4">
					<Link to="https://nutpal.netlify.app">
						<Button
							schema="primary"
							type="button"
							classes="text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2 relative"
						>
							<div className="absolute h-80 w-80 rounded-full bg-ga-orangenut-default/30 blur-3xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-2xl" />
							<p>Launch App</p>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</section>
			<div className="flex flex-col gap-36">
				<LandingSection
					title="About Us"
					content="NUTPAL AI was founded by a collective of AI and Web3 enthusiasts driven by a shared mission: to build decentralized, life-enhancing applications. Our team brings together diverse talents and backgrounds, united by a passion for AI innovation and community-driven projects. We’re building a platform where smart conversation, immersive roleplay, and creativity feel limitless."
					align="left"
					imageLink={group}
				/>

				<LandingSection
					title="Our Mission"
					content="At NUTPAL AI, we’re committed to delivering an exceptional user experience through cutting-edge, accessible AI technology. Our platform features a full-stack chatbot interface with customizable personalities, voices, images, and videos, enabling deeply personal and engaging interactions. Our mission is to give the NUTPAL AI community seamless access to powerful AI systems, without the burden of expensive hardware, financial barriers, or technical limitations. We believe advanced AI should be available to everyone, everywhere."
					align="right"
					imageLink={goal}
				/>

				<LandingSection
					title="Community-Driven"
					content="NUTPAL AI is more than a platform. It's a growing community of AI enthusiasts, developers, and roleplay lovers united by curiosity and creativity. We invite you to join us, collaborate on ideas, and explore the full potential of language models. Together, we are shaping the future of interactive AI-powered experiences and creating something meaningful for the world."
					align="right"
					imageLink={community}
				/>
			</div>

			<div className="relative my-24 flex flex-col items-center gap-4">
				<div className="h-2 w-full rounded-xl bg-ga-orangenut-default"></div>
				<div className="px-4 text-center">
					<h4 className="text-3xl font-bold text-ga-white-darker">
						Connect with Us
					</h4>
					<p className="text-ga-gray-lightest">
						Join our growing community, build, share & explore!
					</p>
				</div>

				<div className="group flex flex-col items-center gap-4">
					<Link to="https://discord.gg/WP8f5Tm74b">
						<Button
							schema="primary"
							type="button"
							classes="text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2 relative"
						>
							<div className="absolute h-80 w-80 rounded-full bg-ga-orangenut-default/30 blur-3xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-2xl" />
							<p>Join the Discord</p>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
};
