import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import { close, logo, menu } from "../assets";
import { Button } from "./Button";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const [showNavBarBackground, setShowNavBarBackground] = useState(false);
	const { t } = useTranslation();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setShowNavBarBackground(true);
			} else {
				setShowNavBarBackground(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={twJoin(
				"px-custom sticky top-0 z-20 flex w-full items-center justify-between py-5",
				showNavBarBackground ? "backdrop-blur-3xl" : "bg-transparent",
			)}
		>
			<Link to="/">
				<div className="flex items-center">
					<img
						src={logo}
						alt="Nutcoin Ecosystem Logo"
						className="mr-1 h-6 w-6 object-contain"
					/>
					<p className="text-[18px] font-bold text-ga-white-default">
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</p>
				</div>
			</Link>

			<div className="flex items-center gap-4">
				{/* Desktop "Launch App" Button */}
				<div className="group hidden md:flex">
					<Link
						target="_blank"
						rel="noopener noreferrer"
						to={"https://nutpal.netlify.app"}
					>
						<Button
							schema="primary"
							type="button"
							classes="h-10 rounded-full px-4 text-ga-white-default text-sm font-medium relative overflow-hidden" // Added relative, overflow-hidden and adjusted classes
						>
							{/* The effect div - scaled down for NavBar */}
							<div className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-ga-orangenut-default/30 blur-xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-lg" />
							{/* Button Text - ensure it's above the effect div if stacking context issues arise */}
							<span className="relative z-10">{t("launchApp")}</span>
						</Button>
					</Link>
				</div>
				<div className="group hidden md:flex">
					<LanguageSwitcher />
				</div>
			</div>

			{/* Mobile Menu */}
			<div className="flex flex-1 items-center justify-end md:hidden">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="h-[28px] w-[28px] cursor-pointer object-contain"
					onClick={() => setToggle(!toggle)}
				/>
				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} landing-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
				>
					<ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
						<li>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								to="https://nutpal.netlify.app"
							>
								{t("launchApp")}
							</Link>
						</li>
						<li>
							<LanguageSwitcher />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
