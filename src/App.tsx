import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import { Landing } from "./pages/Landing/LandingPage";
import { NotFoundPage } from "./pages/NotFound/NotFoundPage";
import { PrivacyPolicy } from "./pages/PrivacyPolicy/PrivacyPolicyPage";
import { TermsOfService } from "./pages/TermsOfService/TermsOfServicePage";

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<Landing />} />
				<Route path="/privacy" element={<PrivacyPolicy />} />
				<Route path="/terms" element={<TermsOfService />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
