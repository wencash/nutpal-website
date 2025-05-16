import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: "instant" });
	}, [pathname]);

	return null;
};

export const handleScrollToTop = (behavior: ScrollBehavior = "smooth") => {
	window.scrollTo({
		top: 0,
		behavior: behavior,
	});
};
