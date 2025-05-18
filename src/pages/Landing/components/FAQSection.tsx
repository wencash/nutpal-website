import React from "react";
import { Link } from "react-router-dom";
import { LocalizedLink } from "../../../components/LocalizedLink";
import { FAQItem } from "./FAQItem";
// import { useTranslation } from 'react-i18next'; // For i18n
// Import Link component if needed within answers
// import { Link } from 'react-router-dom';
// import { LocalizedLink } from '../../../components/LocalizedLink'; // If you have this for i18n links

export const FAQSection: React.FC = () => {
	// const { t } = useTranslation('landing'); // Or 'faq' namespace

	// For i18n, each q and a would be a key like 'faq.q1', 'faq.a1'
	const faqData = [
		{
			question: "What is NUTPAL AI?",
			answer: (
				<>
					NUTPAL AI is a community-driven platform for hyper-realistic AI chat,
					immersive roleplay, and endless creative possibilities. Our technology
					enables lifelike conversations with customizable AI personalities.
				</>
			),
		},
		{
			question: "Is NUTPAL AI really free to use?",
			answer: (
				<>
					Yes! You can enjoy the core features of NUTPAL AI, including advanced
					AI chat, voice interactions, and extensive customization, completely
					free. Enhanced features like video generation and some ultra-advanced
					capabilities are available as premium options.
				</>
			),
		},
		{
			question: "Who is NUTPAL AI designed for?",
			answer: (
				<>
					NUTPAL AI is for anyone curious about the future of AI interaction!
					Whether you're an AI enthusiast, a creative looking to design unique
					characters, an RPG fan wanting immersive roleplay, a developer
					exploring AI capabilities, or simply someone seeking a more personal
					and engaging AI companion, NUTPAL AI offers something for you. Our
					community-driven approach also means it's a platform for those who
					want to help shape the next generation of AI.
				</>
			),
		},
		{
			question: "How is my data handled? What about privacy?",
			answer: (
				<>
					Your privacy is paramount. By default, all your chats, AI creations,
					and personalizations within NUTPAL AI are stored locally on your
					device. We are committed to providing a secure and private environment
					for you to explore and create freely.
				</>
			),
		},
		{
			question: "What is NUTPAL AI's stance on NSFW or adult content?",
			answer: (
				<>
					NUTPAL AI is designed with user privacy and freedom at its core. By
					default, all your chats, AI model configurations, and generated
					content are stored locally on your device. The platform does not
					actively monitor, filter, or store your personal interactions or the
					specific content you choose to explore or create. This gives you
					significant freedom.
					<br />
					<br />
					However, this freedom comes with responsibility. You are solely
					responsible for any content you generate, import, or use with NUTPAL
					AI. We expect users to utilize the platform for private, personal
					purposes and to ensure that all activities and content comply with the
					applicable laws and regulations of their local jurisdiction. For
					further details on acceptable use, please see our{" "}
					<LocalizedLink
						to="/terms"
						className="text-ga-orangenut-default hover:underline"
					>
						Terms of Service
					</LocalizedLink>
					.
				</>
			),
		},
		{
			question:
				"What is the Nutcoin Ecosystem and its connection to NUTPAL AI?",
			answer: (
				<>
					<p>
						NUTPAL AI is a flagship project born from the innovative spirit of
						the Nutcoin Ecosystem – a vibrant, community-driven Web3 space.
						While NUTPAL AI is a standalone application focused on delivering
						cutting-edge AI experiences, it shares the ecosystem's commitment to
						community, transparency, and leveraging technology to create unique
						value. <br /> <br />
						The Nutcoin token (NUT) and NUTS NFTs from Nutcoin Ecosystem play a
						special role in enhancing your NUTPAL AI experience:
					</p>
					<ul className="mt-2 list-disc space-y-1 pl-5 text-ga-white-darker">
						<li>
							<strong className="text-ga-white-default">
								NUT Token Discounts:
							</strong>{" "}
							Get discounted rates when paying premium features with NUT tokens.
						</li>
						<li>
							<strong className="text-ga-white-default">
								NUTS NFT Holder Perks (only 10k total):
							</strong>{" "}
							Access exclusive features and permanent discounts with NUTS NFT
							ownership.
						</li>
						<li>
							<strong className="text-ga-white-default">
								Ultra Mode (for only 10 ultra-rare NUTS NFTs):
							</strong>{" "}
							Unlock early access before everyone else to the latest SOTA
							features & Sentient AI.
						</li>
					</ul>
				</>
			),
		},
		{
			question: "Why are only cryptocurrencies accepted for premium features?",
			answer: (
				<>
					We prioritize your privacy and believe in the empowering nature of
					decentralized technologies. Accepting cryptocurrencies for premium
					services allows for greater user anonymity and aligns with our Web3
					ethos. It also enables seamless integration with the Nutcoin
					Ecosystem, allowing us to offer unique benefits to NUT and NUTS
					holders.
				</>
			),
		},
		{
			question:
				"How does revenue from NUTPAL AI support the Nutcoin Ecosystem?",
			answer: (
				<>
					Revenue generated from NUTPAL AI's premium services is designed to
					create a sustainable and deflationary cycle for the Nutcoin Ecosystem.
					A significant portion will be used to buy back NUT tokens from the
					market, which are then burned to mint NUTS NFTs. These NUTS NFTs, in
					turn, unlock unique features in NUTPAL AI, creating a continuous loop
					that benefits both NUTPAL AI users and the broader Nutcoin community
					by enhancing token value and NFT utility. <br /> <br />
					<Link
						to="https://medium.com/@nutcoin/the-hidden-strength-of-nutcoin-ecosystem-tokenomics-a-sustainable-deflationary-and-fun-ecosystem-de1e4c7cac11"
						target="_blank"
						rel="noopener noreferrer"
						className="text-ga-orangenut-default hover:underline"
					>
						Learn more about the deflationary tokenomics of Nutcoin Ecosystem
					</Link>
					.
				</>
			),
		},
	];

	return (
		<section className="md:py-22 w-full py-16">
			{" "}
			{/* Changed background for distinction */}
			<div className="px-custom mx-auto max-w-3xl">
				{" "}
				{/* Max width for readability */}
				<div className="mb-8 text-center md:mb-8">
					<h2 className="bg-gradient-to-br from-ga-white-default via-ga-white-default to-ga-orangenut-default bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
						{/* {t('faq.sectionTitle')} */}
						Frequently Asked Questions
					</h2>
					<p className="mx-auto mt-4 max-w-2xl text-lg text-ga-white-darker">
						{/* {t('faq.sectionSubtitle')} */}
						Have questions? We've got answers.
					</p>
				</div>
				<div className="space-y-1">
					{" "}
					{/* space-y-1 for slight separation between items if needed, border handles most */}
					{faqData.map((item, index) => (
						<FAQItem
							key={index}
							question={item.question}
							answer={item.answer}
							// tQuestionKey={`faq.q${index + 1}`} // Example i18n key
							// tAnswerKey={`faq.a${index + 1}`}   // Example i18n key
							// t={t}
						/>
					))}
				</div>
			</div>
		</section>
	);
};
