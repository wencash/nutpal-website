import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./i18n"; // Import your i18n configuration
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Suspense fallback={<div>Loading...</div>}>
			{" "}
			{/* Or a nicer loading component */}
			<App />
		</Suspense>
	</React.StrictMode>,
);
