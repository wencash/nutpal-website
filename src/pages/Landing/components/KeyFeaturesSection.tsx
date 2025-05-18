import { Brain, Film, Mic, Palette } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";
import { FeatureCard } from "./FeatureCard";

export const KeyFeaturesSection: React.FC = () => {
	const { t } = useTranslation();
	const features = [
		{
			icon: Brain,
			title: t("keyFeatures.feature1.title"),
			description: t("keyFeatures.feature1.description"),
		},
		{
			icon: Palette,
			title: t("keyFeatures.feature2.title"),
			description: t("keyFeatures.feature2.description"),
		},
		{
			icon: Mic,
			title: t("keyFeatures.feature3.title"),
			description: t("keyFeatures.feature3.description"),
		},
		{
			icon: Film,
			title: t("keyFeatures.feature4.title"),
			description: t("keyFeatures.feature4.description"),
		},
	];

	return (
		<section className="w-full py-16 md:py-24">
			<div className="px-custom mx-auto max-w-7xl">
				<div className="mb-12 text-center md:mb-16">
					<h2 className="bg-gradient-to-br from-ga-white-default via-ga-white-default to-ga-orangenut-default bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
						{t("keyFeatures.title")}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-ga-white-darker">
						{t("keyFeatures.subtitle1")} <br className="hidden sm:block" />{" "}
						{t("keyFeatures.subtitle2")}
					</p>
				</div>

				{/* Responsive Grid for Features */}
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
					{features.map((feature, index) => (
						<FeatureCard
							key={index}
							icon={feature.icon}
							title={feature.title}
							description={feature.description}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
