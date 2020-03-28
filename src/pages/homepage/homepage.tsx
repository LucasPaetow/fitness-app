import React from "react";
//@ts-ignore
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "components/button";
import styles from "./Homepage.module.css";

const Homepage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location, navigate);
	return (
		<article className={styles.homepageLayout}>
			<header className={styles.homepageHeader}>
				<h1 className={styles.homepageHeaderline}>hello, homepage</h1>
				<p className={styles.homepageSubline}>
					Welcome, please continue here to the dashboard and have fun
					along the way.
				</p>
			</header>

			<Link className={styles.homepageButtonWrapper} to="/dashboard">
				<Button>Go to dashboard</Button>
			</Link>
		</article>
	);
};

export default Homepage;
