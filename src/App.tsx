// src/App.tsx
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
	useParams,
} from "react-router-dom";

import { ScrollToTop } from "./components/ScrollToTop"; // Assuming you have this
import { supportedLngs } from "./i18n"; // Import your supportedLngs map
import { Landing } from "./pages/Landing/LandingPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import { TermsOfService } from "./pages/TermsOfService/TermsOfServicePage";

// Component to handle language from URL and update i18n state and HTML lang
const LanguageHandler = () => {
	const { lng } = useParams<{ lng: string }>();
	const { i18n } = useTranslation();
	const location = useLocation();

	useEffect(() => {
		const currentLngInPath = lng || i18n.language.split("-")[0] || "en";

		if (supportedLngs.hasOwnProperty(currentLngInPath)) {
			if (i18n.language !== currentLngInPath) {
				i18n.changeLanguage(currentLngInPath);
			}
			// Set the lang attribute on the HTML element
			document.documentElement.lang = currentLngInPath;
			// --- RTL SUPPORT ---
			// Set the dir attribute on the HTML element based on the current language
			document.documentElement.dir = i18n.dir(currentLngInPath);
		}
	}, [lng, i18n, location.pathname]); // location.pathname added as dependency

	// If the language in the path is not supported, redirect to fallback (e.g., English)
	// This redirection logic might need refinement based on your exact routing setup.
	if (lng && !supportedLngs.hasOwnProperty(lng)) {
		const fallbackLng = (i18n.options.fallbackLng as string[])[0] || "en";
		const newPath = location.pathname.replace(`/${lng}`, `/${fallbackLng}`);
		return <Navigate to={newPath} replace />;
	}

	return null; // This component does not render anything itself
};
// Component to wrap routes that need language prefix
const LocalizedRoutes = () => {
	return (
		<>
			<LanguageHandler />
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/terms" element={<TermsOfService />} />
				{/* Add other non-lng specific routes if any, or handle them differently */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
};

const App = () => {
	const { i18n } = useTranslation(); // Get i18n instance to access the default language

	return (
		<BrowserRouter>
			<Routes>
				{/* Redirect from root to default language */}
				<Route
					path="/"
					element={
						<Navigate to={`/${i18n.language.split("-")[0] || "en"}`} replace />
					}
				/>
				{/* Routes with language prefix */}
				<Route path="/:lng/*" element={<LocalizedRoutes />} />
				{/* Fallback for any route not matching /:lng/*, could lead to a 404 or default lang page */}
				<Route
					path="*"
					element={
						<Navigate
							to={`/${i18n.language.split("-")[0] || "en"}/404`}
							replace
						/>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
