import { useEffect } from "react";
import { Footer } from "../../components/Footer";
import { NavBar } from "../../components/NavBar";
import { StarsBackground } from "../../components/StarsBackground";
import { PrivacySection } from "./components/PrivacySection";

export const PrivacyPolicy = () => {
	// remove overflow hidden from body
	// temporary as not to mess with other pages by editing global css
	useEffect(() => {
		document.body.style.overflow = "auto";
	}, []);

	return (
		<div className="scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-orangenut/900 scrollbar flex min-h-screen flex-col justify-between gap-12 bg-ga-black-lighter">
			<StarsBackground />

			<div>
				<NavBar />
			</div>

			<div className="mx-auto flex max-w-5xl flex-col gap-12 px-4">
				<h2 className="text-3xl font-bold">
					Privacy Policy for{" "}
					<span className="whitespace-nowrap">
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</span>
				</h2>

				<div className="flex flex-col gap-4">
					<h3 className="text-lg font-bold italic">
						Effective Date: May 16, 2025
					</h3>
					<p className="italic">
						This Privacy Policy is designed to inform you about the data we
						collect, how we use it, and your rights concerning your personal
						information.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					<PrivacySection
						title="Information We Collect:"
						content="NUTPAL AI does not directly collect or store personal information from users. However, when using our AI chat service, your prompts and responses may be transmitted to and processed by third-party providers (such as OpenRouter) in real-time to generate replies. As a community project, the interactions with NUTPAL AI are entirely anonymous, and we do not store any identifiable information about users or their conversations."
					/>

					<PrivacySection
						title="How We Use Information:"
						content="NUTPAL AI does not use or store user data for any internal purpose. Interactions are handled in real time via external providers, who may process and log conversation data as described in their own Privacy Policies."
					/>

					<PrivacySection
						title="How We Share Information:"
						content="NUTPAL AI does not share any information with third parties. Conversations with the language model are processed in real-time without being saved."
					/>

					<PrivacySection
						title="Cookies and Tracking Technologies:"
						content="NUTPAL AI does not use cookies or any tracking technologies to monitor or collect user activity on the platform."
					/>

					<PrivacySection
						title="Third-Party Services:"
						content="NUTPAL AI is hosted on servers that may be provided by third-party service providers. These third-party providers may process user prompts to deliver AI-generated responses. We recommend reviewing their privacy practices, especially OpenRouter’s policy, to understand how they handle data. NUTPAL AI has no control over or access to their data logs."
					/>

					<PrivacySection
						title="Third-Party AI Providers:"
						content="NUTPAL AI relies on external AI providers such as OpenRouter to process user prompts and generate responses. These providers may temporarily store or log interaction data to improve their services or comply with legal obligations. We do not control or access these logs. Please refer to OpenRouter’s Privacy Policy for more information."
					/>

					<PrivacySection
						title="Security Measures:"
						content="While we take reasonable measures to ensure the security of our platform and any data passing through it, it is essential to note that since we do not collect any user data, there is no personal information at risk."
					/>

					<PrivacySection
						title="Children's Privacy:"
						content="NUTPAL AI is not intended for use by individuals under the age of 18. We do not knowingly collect any personal information from children. If you are a parent or guardian and believe that your child has interacted with NUTPAL AI, please contact us, and we will take necessary actions to remove any data if found."
					/>

					<PrivacySection
						title="Changes to this Privacy Policy:"
						content="This Privacy Policy may be updated from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated version on this page with the new effective date. We encourage you to review this Privacy Policy regularly to stay informed about our data practices."
					/>
				</div>

				<div className="flex max-w-2xl flex-col gap-4">
					<p>
						If you have any questions or concerns about this Privacy Policy or
						the use of NUTPAL AI, please contact us at contact@nutpal.ai.
					</p>

					<p className="text-orangenut-200">
						By using NUTPAL AI, you agree to the terms outlined in this Privacy
						Policy. If you do not agree with this policy, please refrain from
						using the platform.
					</p>
				</div>
			</div>

			<Footer />
		</div>
	);
};
