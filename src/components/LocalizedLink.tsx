import { useTranslation } from "react-i18next";
import { Link, LinkProps } from "react-router-dom";

export const LocalizedLink = (props: LinkProps) => {
	const { i18n } = useTranslation();
	const lang = i18n.language.split("-")[0] || "en"; // Get base language code
	const to =
		typeof props.to === "string"
			? `/${lang}${props.to.startsWith("/") ? "" : "/"}${props.to}`
			: props.to;

	return <Link {...props} to={to} />;
};
