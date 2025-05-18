import { ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { community, goal, group, wave } from "../../../assets";
import { Button } from "../../../components/Button";
import { FAQSection } from "./FAQSection";
import { KeyFeaturesSection } from "./KeyFeaturesSection";
import { LandingSection } from "./LandingSection";

export const LandingInfo = () => {
	const { t } = useTranslation(["landing", "common"]); // Load 'landing' and 'common' namespaces

	return (
		<main className="px-custom mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center justify-center gap-20 py-16">
			<img
				src={wave}
				alt="wave"
				className="absolute left-0 right-0 top-10 h-screen object-cover opacity-10 saturate-0 md:w-screen md:object-contain"
			/>

			{/* Hero Section */}
			<section className="relative flex min-h-[75vh] animate-fade-up flex-col items-center justify-center gap-8 md:min-h-[65vh]">
				<div className="flex flex-col items-center justify-center gap-8">
					<h1 className="text-ga-white-default` text-5xl font-bold md:text-7xl">
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</h1>

					<p
						className={`bg-gradient-to-tr bg-clip-text text-center text-3xl text-ga-white-darker`}
					>
						{t("subHeading1", { ns: "landing" })}
						<br className="hidden sm:block" />{" "}
						{t("subHeading2", { ns: "landing" })}
						<br className="hidden sm:block" />{" "}
						{t("subHeading3", { ns: "landing" })}
						<br className="hidden sm:block" />{" "}
						<br className="mb-4 hidden sm:block" />{" "}
					</p>
				</div>

				<div className="group flex flex-col items-center gap-4">
					<Link target="_blank" to="https://nutpal.netlify.app">
						<Button
							schema="primary"
							type="button"
							classes="text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2 relative"
						>
							<div className="absolute h-80 w-80 rounded-full bg-ga-orangenut-default/30 blur-3xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-2xl" />
							<p>{t("launchApp", { ns: "common" })}</p>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</section>

			<KeyFeaturesSection />

			{/* About Us, Our Mission, Community-Driven sections */}
			<div className="flex flex-col gap-36">
				<LandingSection
					title={t("aboutUsTitle", { ns: "landing" })}
					subtitle={t("aboutUsSubtitle", { ns: "landing" })}
					content={t("aboutUsContent", { ns: "landing" })}
					align="left"
					imageLink={group}
				/>

				<LandingSection
					title={t("ourMissionTitle", { ns: "landing" })}
					subtitle={t("ourMissionSubtitle", { ns: "landing" })}
					content={t("ourMissionContent", { ns: "landing" })}
					align="right"
					imageLink={goal}
				/>

				<LandingSection
					title={t("communityDrivenTitle", { ns: "landing" })}
					subtitle={t("communityDrivenSubtitle", { ns: "landing" })}
					content={t("communityDrivenContent", { ns: "landing" })}
					align="left"
					imageLink={community}
				/>
			</div>

			<FAQSection />

			{/* Connect with Us section */}
			<div className="relative my-24 flex flex-col items-center gap-4">
				<div className="h-2 w-full rounded-xl bg-ga-orangenut-default"></div>
				<div className="px-4 text-center">
					<h4 className="text-3xl font-bold text-ga-white-darker">
						{t("connectwithUsTitle", { ns: "landing" })}
					</h4>
					<p className="text-ga-gray-lightest">
						{t("connectwithUsContent", { ns: "landing" })}
					</p>
				</div>

				<div className="group flex flex-col items-center gap-4">
					<Link target="_blank" to="https://discord.gg/WP8f5Tm74b">
						<Button
							schema="primary"
							type="button"
							classes="text-lg font-medium md:px-12 md:py-3 rounded-2xl flex flex-row gap-2 relative"
						>
							<div className="absolute h-80 w-80 rounded-full bg-ga-orangenut-default/30 blur-3xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-2xl" />
							<p>{t("connectwithUsButton", { ns: "landing" })}</p>
							<ChevronRight />
						</Button>
					</Link>
				</div>
			</div>
		</main>
	);
};
