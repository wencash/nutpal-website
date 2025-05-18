import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import { twJoin } from "tailwind-merge";

interface FAQItemProps {
	question: string;
	answer: React.ReactNode;
}

export const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="border-b border-ga-gray-darker last:border-b-0">
			{/* Toggler */}
			<button
				type="button"
				onClick={() => setIsOpen((prev) => !prev)}
				className="flex w-full items-center justify-between px-1 py-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-ga-orangenut-default/50"
				aria-expanded={isOpen}
			>
				<span className="text-lg font-medium text-ga-white-default transition-colors hover:text-ga-orangenut-default">
					{question}
				</span>

				<ChevronDown
					className={twJoin(
						"h-6 w-6 text-ga-orangenut-default transition-transform duration-300",
						isOpen && "rotate-180",
					)}
				/>
			</button>

			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={
					isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
				}
				transition={{ duration: 0.35, ease: "easeInOut" }}
				style={{ overflow: "hidden" }}
			>
				<div className="px-1 pb-5 text-base leading-relaxed text-ga-white-darker">
					{answer}
				</div>
			</motion.div>
		</div>
	);
};
