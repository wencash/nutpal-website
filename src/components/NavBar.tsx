import { useEffect, useRef, useState } from "react";
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

	// Refs for the mobile menu toggle button and the dropdown itself
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

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

	// Effect to handle clicks outside the mobile menu to close it
	useEffect(() => {
		if (!toggle) return; // Only run if the menu is open

		const handleClickOutside = (event: MouseEvent) => {
			// If the click is on the toggle button, let its own onClick handle it
			if (
				mobileMenuButtonRef.current &&
				mobileMenuButtonRef.current.contains(event.target as Node)
			) {
				return;
			}
			// If the click is outside the dropdown menu, close it
			if (
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				setToggle(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [toggle]); // Re-run if toggle changes

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
						className="mr-1 h-6 w-6 object-contain rtl:ml-1"
					/>
					<p className="text-[18px] font-bold text-ga-white-default">
						NUTPAL <span className="text-ga-orangenut-default">AI</span>
					</p>
				</div>
			</Link>

			<div className="flex items-center gap-2 md:gap-4">
				{/* Desktop "Launch App" Button */}
				<div className="group hidden md:flex">
					<Button
						schema="primary"
						type="button"
						classes="h-10 rounded-full px-4 text-ga-white-default text-sm font-medium relative overflow-hidden flex items-center justify-center"
						disabled={true}
					>
						{/* The effect div - scaled down for NavBar */}
						<div className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-ga-orangenut-default/30 blur-xl transition-all duration-1000 ease-in-out group-hover:-rotate-45 group-hover:scale-y-150 group-hover:blur-lg" />
						{/* Button Text - ensure it's above the effect div if stacking context issues arise */}
						<span className="relative z-10">{t("launchApp")}</span>
					</Button>
				</div>
				{/* Language Switcher for Desktop */}
				<div className="hidden md:flex">
					<LanguageSwitcher />
				</div>
			</div>

			{/* Mobile Menu Toggle */}
			<div className="flex flex-1 items-center justify-end md:hidden">
				<button
					ref={mobileMenuButtonRef} // Assign ref to the toggle button
					onClick={() => setToggle(!toggle)}
					aria-label={t("toggleMenuAriaLabel", "Toggle menu")}
					aria-expanded={toggle}
					className="focusable-icon-button h-[28px] w-[28px] cursor-pointer p-0"
				>
					<img
						src={toggle ? close : menu}
						alt={
							toggle
								? t("closeMenuAlt", "Close menu")
								: t("openMenuAlt", "Open menu")
						}
						className="h-full w-full object-contain"
					/>
				</button>
				{/* Mobile Menu Dropdown */}
				<div
					ref={mobileMenuRef} // Assign ref to the dropdown
					className={twJoin(
						!toggle ? "hidden" : "flex",
						"landing-gradient absolute top-16 z-20 mx-4 my-2 min-w-[180px] rounded-xl p-6 shadow-xl",
						"ltr:right-0 rtl:left-0",
					)}
				>
					<ul className="flex w-full flex-1 list-none flex-col items-stretch justify-end gap-4 text-start rtl:text-end">
						<li className="text-ga-white-default transition-colors hover:text-ga-orangenut-default">
							<span className="block w-full cursor-not-allowed py-2 opacity-75">
								{t("launchApp")} ({t("comingSoon")})
							</span>
						</li>
						<li className="border-t border-ga-white-default/10 pt-4">
							<LanguageSwitcher />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
