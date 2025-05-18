import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LocalizedLink } from "./LocalizedLink";
import { handleScrollToTop } from "./ScrollToTop";

export const Footer = () => {
	const { t } = useTranslation();
	const year = new Date().getFullYear();

	return (
		<div className="flex flex-col gap-8 bg-ga-black-default px-8 py-6 shadow-xl max-sm:p-3">
			{/* top row */}
			<div className="flex flex-col justify-between gap-8 md:flex-row">
				{/* logo and about */}
				<div className="flex flex-col gap-2 font-bold">
					<Link
						to="/"
						className="w-fit"
						onClick={() => handleScrollToTop("instant")}
					>
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</Link>
					<p className="max-w-md text-sm font-light">
						{t("footer.tagline1")}
						<br className="hidden sm:block" /> {t("footer.tagline2")}
					</p>
				</div>

				{/* grid */}
				<div className="grid grid-cols-2 gap-8 text-sm md:px-12">
					{/* project list */}
					<ul className="flex flex-col gap-2">
						<li className="font-bold">{t("footer.projectTitle")}</li>
						<LocalizedLink to="/privacy" className="underline-animation w-fit">
							<li>{t("footer.privacyLinkText")}</li>
						</LocalizedLink>
						<LocalizedLink to="/terms" className="underline-animation w-fit">
							<li>{t("footer.termsLinkText")}</li>
						</LocalizedLink>
					</ul>

					{/* connect list */}
					<ul className="flex flex-col gap-2">
						<li className="font-bold">{t("footer.connectTitle")}</li>
						<Link
							to="https://discord.gg/WP8f5Tm74b"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation w-fit"
						>
							<li>{t("footer.discordLinkText")}</li>
						</Link>
						<Link
							to="https://x.com/NUTPAL_AI"
							target="_blank"
							rel="noopener noreferrer"
							className="underline-animation w-fit"
						>
							<li>{t("footer.twitterLinkText")}</li>
						</Link>
					</ul>
				</div>
			</div>

			{/* bottom row */}
			<div className="flex items-center justify-between gap-4">
				<small className="text-xs font-light italic">
					{t("footer.copyright", { year: year })}
				</small>

				<small
					className="cursor-pointer rounded-xl p-1 text-xs font-thin italic text-ga-orangenut-default transition-colors hover:bg-ga-orangenut-default hover:text-ga-black-lightest"
					onClick={() => handleScrollToTop()}
				>
					<ArrowUp />
				</small>
			</div>
		</div>
	);
};
