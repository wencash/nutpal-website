import React from "react";
// Assuming you will use useTranslation hook here for the section title and feature content
// import { useTranslation } from 'react-i18next';
import { Brain, Film, Mic, Palette } from "lucide-react"; // Import desired icons
import { FeatureCard } from "./FeatureCard";

export const KeyFeaturesSection: React.FC = () => {
	// const { t } = useTranslation('landing'); // Or your relevant namespace

	// For translation, these would be t('keyFeatures.title'), etc.
	const sectionTitle = "Unlock the Power of Truly Personal AI";

	const features = [
		{
			icon: Brain, // Changed from Sparkles for better context representation
			// title: t('keyFeatures.feature1.title'),
			title: "AI That Comes Alive",
			// description: t('keyFeatures.feature1.description'),
			description:
				"Experience AI with rich personality that understands vast context, feels deeply nuanced emotions, hears your voice, sees your world, and remembers every interaction.",
		},
		{
			icon: Palette,
			// title: t('keyFeatures.feature2.title'),
			title: "Limitless Customization",
			// description: t('keyFeatures.feature2.description'),
			description:
				"Sculpt your ideal AI: seamlessly blend unique personality, voice, visuals, and real-time animation. Privacy-first: your chats and creations are saved locally, by default.",
		},
		{
			icon: Mic,
			// title: t('keyFeatures.feature4.title'),
			title: "Crystal-Clear Voice Communication",
			// description: t('keyFeatures.feature4.description'),
			description:
				"Hear your AI speak with natural, expressive voices. Engage in fluid, captivating conversations with high-fidelity audio that truly immerses you.",
		},
		{
			icon: Film, // Using Camera and MicVocal separately could be an option or combine into one.
			// title: t('keyFeatures.feature3.title'),
			title: "Interactive Visual Worlds & Stories",
			// description: t('keyFeatures.feature3.description'),
			description:
				"Watch your AI and their dynamic environments with cutting-edge image & real-time video generation. Even start group chats between independent AIs, pioneering a new era of live interactive AI movies.",
		},
	];

	// If you want exactly 4 features as per your initial request, you can choose the top 4 or combine some.
	// For a 2x2 grid, you'd slice the array: features.slice(0, 4)
	// I've provided 5, you can select which ones to use or how to display them.
	// For this example, I'll use a grid that can handle 2 or 3 items per row.

	return (
		<section className="w-full py-16 md:py-24">
			<div className="px-custom mx-auto max-w-7xl">
				<div className="mb-12 text-center md:mb-16">
					<h2 className="bg-gradient-to-br from-ga-white-default via-ga-white-default to-ga-orangenut-default bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
						{/* {t('keyFeatures.sectionTitle')} */}
						{sectionTitle}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-ga-white-darker">
						{/* {t('keyFeatures.sectionSubtitle')} */}
						Discover the core capabilities that make NUTPAL AI{" "}
						<br className="hidden sm:block" /> a unique creative experience far
						beyond traditional chatbots.
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
							// t={t} // Pass t if FeatureCard doesn't use the hook itself
						/>
					))}
				</div>
			</div>
		</section>
	);
};
