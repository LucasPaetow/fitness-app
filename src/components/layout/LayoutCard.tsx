import React from "react";
import styles from "./Layout.module.css";

type CardProps = {
	children: React.ReactNode;
	headline: string;
	subheadline?: string;
};

export const CardLayout: React.FC<CardProps> = props => {
	const { children, headline, subheadline } = props;
	return (
		<section className={styles.layoutCardSection}>
			<header className={styles.layoutCardHeader}>
				<h4 className={styles.layoutCardHeadline}>{headline}</h4>
				<p className={styles.layoutCardSubline}>{subheadline}</p>
			</header>
			<div className={styles.layoutCardWrapper}>{children}</div>
		</section>
	);
};
