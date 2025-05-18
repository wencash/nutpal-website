import { LucideIcon } from "lucide-react";
import React from "react";

interface FeatureCardProps {
	icon: LucideIcon;
	title: string;
	description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
	icon: Icon,
	title,
	description,
}) => {
	return (
		<div className="flex flex-col items-center space-y-3 rounded-xl bg-ga-black-lighter p-6 text-center shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-ga-orangenut-default/30">
			<div className="rounded-full bg-ga-orangenut-default/20 p-3 text-ga-orangenut-default">
				<Icon size={32} strokeWidth={2} />
			</div>
			<h3 className="text-xl font-bold text-ga-white-default">{title}</h3>
			<p className="text-sm leading-relaxed text-ga-white-darker">
				{description}
			</p>
		</div>
	);
};
