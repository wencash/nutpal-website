import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { twJoin } from "tailwind-merge";
import { close, logo, menu } from "../assets";
import { handleScrollToTop } from "./ScrollToTop";

export const NavBar = () => {
	const [toggle, setToggle] = useState(false);
	const [showNavBarBackground, setShowNavBarBackground] = useState(false);

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
			<Link to="/" onClick={() => handleScrollToTop("instant")}>
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

			<div className="hidden md:flex">
				<Link target="_blank" to={"https://nutpal.netlify.app"}>
					<button className="orangenut-gradient-background scale-10 mr-3 h-10 rounded-full px-5 text-ga-white-default">
						Launch App
					</button>
				</Link>
			</div>
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
							<Link target="_blank" to="https://nutpal.netlify.app">
								Launch App
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
