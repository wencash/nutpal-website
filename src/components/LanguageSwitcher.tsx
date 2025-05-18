// src/components/LanguageSwitcher.tsx
import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react"; // Make sure useEffect and useRef are imported
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { supportedLngs } from "../i18n";

export const LanguageSwitcher = () => {
	const { i18n } = useTranslation();
	const navigate = useNavigate();
	const location = useLocation();
	const { lng: currentLngFromParams } = useParams<{ lng: string }>();
	const [isOpen, setIsOpen] = useState(false);

	const dropdownRef = useRef<HTMLDivElement>(null); // Ref for the dropdown menu div
	const buttonRef = useRef<HTMLButtonElement>(null); // Ref for the toggle button

	const currentLanguage =
		currentLngFromParams || i18n.language.split("-")[0] || "en";

	const changeLanguage = (newLng: string) => {
		const currentPathWithoutLng = location.pathname.startsWith(
			`/${currentLanguage}`,
		)
			? location.pathname.substring(`/${currentLanguage}`.length) || "/"
			: location.pathname;

		const newPath = `/${newLng}${currentPathWithoutLng === "" ? "/" : currentPathWithoutLng}`;

		i18n.changeLanguage(newLng);
		navigate(newPath);
		setIsOpen(false); // Close dropdown after selection
	};

	// Effect to handle clicks outside
	useEffect(() => {
		if (!isOpen) return; // Only run if dropdown is open

		const handleClickOutside = (event: MouseEvent) => {
			// If the click is on the button itself, let the button's onClick handle it
			if (
				buttonRef.current &&
				buttonRef.current.contains(event.target as Node)
			) {
				return;
			}
			// If the click is outside the dropdown menu, close it
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		// Cleanup the event listener when the component unmounts or before the effect re-runs
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [isOpen]); // Dependency array: re-run effect if isOpen changes

	return (
		<div className="relative">
			{" "}
			{/* This outer div helps contain the absolutely positioned dropdown */}
			<button
				ref={buttonRef} // Assign ref to the button
				onClick={() => setIsOpen((prev) => !prev)} // Toggle isOpen state
				className="focusable-icon-button flex h-10 items-center justify-center rounded-full hover:bg-ga-white-default/10 md:px-3"
				aria-expanded={isOpen}
				aria-haspopup="true"
				aria-label="Change language"
			>
				<Globe size={20} />
				<span className="ml-2 text-sm uppercase">{currentLanguage}</span>
				<ChevronDown
					size={16}
					className={`ml-1 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
				/>
			</button>
			{isOpen && (
				<div
					ref={dropdownRef} // Assign ref to the dropdown menu
					className="scrollbar absolute right-0 z-50 mt-2 max-h-60 w-48 overflow-y-auto rounded-md bg-ga-black-lighter shadow-lg"
					role="menu"
				>
					<ul>
						{Object.entries(supportedLngs).map(([code, name]) => (
							<li key={code} role="none">
								<button
									onClick={() => changeLanguage(code)}
									className={`w-full px-4 py-2 text-left text-sm hover:bg-ga-gray-default ${
										currentLanguage === code
											? "font-bold text-ga-orangenut-default"
											: "text-ga-white-default"
									}`}
									role="menuitem"
								>
									{name} ({code.toUpperCase()})
								</button>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};
