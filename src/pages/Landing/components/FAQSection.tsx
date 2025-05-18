import React from "react";
import { useTranslation } from "react-i18next"; // For i18n
import { Link } from "react-router-dom";
import { LocalizedLink } from "../../../components/LocalizedLink";
import { FAQItem } from "./FAQItem";

export const FAQSection: React.FC = () => {
	const { t } = useTranslation();

	const faqData = [
		{
			question: t("faq.q1"),
			answer: <>{t("faq.a1")}</>,
		},
		{
			question: t("faq.q2"),
			answer: <>{t("faq.a2")}</>,
		},
		{
			question: t("faq.q3"),
			answer: <>{t("faq.a3")}</>,
		},
		{
			question: t("faq.q4"),
			answer: <>{t("faq.a4")}</>,
		},
		{
			question: t("faq.q5"),
			answer: (
				<>
					{t("faq.a5a")}
					<br />
					<br />
					{t("faq.a5b")}{" "}
					<LocalizedLink
						to="/terms"
						className="text-ga-orangenut-default hover:underline"
					>
						{t("footer.termsLinkText")}
					</LocalizedLink>
					.
				</>
			),
		},
		{
			question: t("faq.q6"),
			answer: (
				<>
					<p>
						{t("faq.a6a")}
						<br /> <br />
						{t("faq.a6b")}
					</p>
					<ul className="mt-2 list-disc space-y-1 pl-5 text-ga-white-darker">
						<li>
							<strong className="text-ga-white-default">
								{t("faq.a6b1Title")}
							</strong>{" "}
							{t("faq.a6b1Content")}
						</li>
						<li>
							<strong className="text-ga-white-default">
								{t("faq.a6b2Title")}
							</strong>{" "}
							{t("faq.a6b2Content")}
						</li>
						<li>
							<strong className="text-ga-white-default">
								{t("faq.a6b3Title")}
							</strong>{" "}
							{t("faq.a6b3Content")}
						</li>
					</ul>
				</>
			),
		},
		{
			question: t("faq.q7"),
			answer: <>{t("faq.a7")}</>,
		},
		{
			question: t("faq.q8"),
			answer: (
				<>
					{t("faq.a8a")}
					<br /> <br />
					<Link
						to="https://medium.com/@nutcoin/the-hidden-strength-of-nutcoin-ecosystem-tokenomics-a-sustainable-deflationary-and-fun-ecosystem-de1e4c7cac11"
						target="_blank"
						rel="noopener noreferrer"
						className="text-ga-orangenut-default hover:underline"
					>
						{t("faq.a8b")}
					</Link>
				</>
			),
		},
	];

	return (
		<section className="md:py-22 w-full py-16">
			<div className="px-custom mx-auto max-w-3xl">
				<div className="mb-8 text-center md:mb-8">
					<h2 className="bg-gradient-to-br from-ga-white-default via-ga-white-default to-ga-orangenut-default bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
						{t("faq.title")}
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-ga-white-darker">
						{t("faq.subtitle")}
					</p>
				</div>
				<div className="space-y-1">
					{faqData.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
