//@ts-nocheck
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Hamburger from "components/navbar/NavbarHamburger";
import styles from "./Navbar.module.css";

export const NavbarUnauthenticated = () => {
	const [activeNav, setActiveNav] = React.useState(false);
	const location = useLocation();
	const handleClick = () => setActiveNav(!activeNav);

	const beautfiyLocation = () => {
		let current = location.pathname;

		if (current === "/") {
			return "Dashboard";
		}

		return current
			.split("/")[1]
			.split("-")
			.join(" ");
	};

	return (
		<nav className={styles.navbar}>
			<section className={styles.navbarVisible}>
				<NavLink to="/" className={styles.navbarLinkHome}>
					<div className={styles.navbarBrandIcon}></div>
					<h4 className={styles.navbarBrandHeadline}>Brand</h4>
				</NavLink>
				<div onClick={handleClick} className={styles.navbarLinkCurrent}>
					<p className={styles.navbarLinkLocationText}>
						{beautfiyLocation()}
					</p>
					<Hamburger hamburgerState={activeNav}></Hamburger>
				</div>
			</section>
			{activeNav && (
				<section
					className={styles.navbarExtended}
					onClick={handleClick}>
					<div className={styles.navbarLinks}>
						<NavLink
							to="/"
							activeClassName={styles.selected}
							className={styles.navbarLink}>
							<div className={styles.navbarIcon}></div>Home
						</NavLink>
						<NavLink
							to="/login"
							activeClassName={styles.selected}
							className={styles.navbarLink}>
							<div className={styles.navbarIcon}></div>Login
						</NavLink>
						<NavLink
							to="/signup"
							activeClassName={styles.selected}
							className={styles.navbarLink}>
							<div className={styles.navbarIcon}></div>Signup
						</NavLink>
					</div>
				</section>
			)}
		</nav>
	);
};
