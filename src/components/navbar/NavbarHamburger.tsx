import React from "react";
import styles from "./Navbar.module.css";

type HamburgerProps = {
	hamburgerState: boolean;
};

const Hamburger = (props: HamburgerProps) => {
	const { hamburgerState } = props;

	return (
		<div
			className={`${styles.hamburger} ${
				hamburgerState ? styles.open : ""
			}`}>
			<div className={styles.hamburgerTop}></div>
			<div className={styles.hamburgerMid}></div>
			<div className={styles.hamburgerBottom}></div>
		</div>
	);
};

export default Hamburger;
