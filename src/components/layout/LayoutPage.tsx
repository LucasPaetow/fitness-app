import React from "react";
import styles from "./Layout.module.css";

type LayoutProps = {
	children: React.ReactNode;
	headline: string;
	subheadline?: string;
};

export const PageLayout: React.FC<LayoutProps> = props => {
	const { children, headline, subheadline } = props;
	return (
		<article className={styles.layoutPageLayout}>
			<header className={styles.layoutPageHeader}>
				<h1 className={styles.layoutPageHeadline}>{headline}</h1>
				<p className={styles.layoutPageSubline}>{subheadline}</p>
			</header>

			<div className={styles.layoutPageWrapper}>{children}</div>
		</article>
	);
};
