import React from "react";
import styles from "./Layout.module.css";

type SectionProps = {
	children: React.ReactNode;
	headline: string;
};

export const SectionLayout: React.FC<SectionProps> = props => {
	const { children, headline } = props;
	return (
		<section className={styles.layoutSectionSection}>
			<header className={styles.layoutSectionHeader}>
				<h2 className={styles.layoutSectionHeadline}>{headline}</h2>
			</header>
			<div className={styles.layoutSectionWrapper}>{children}</div>
		</section>
	);
};
