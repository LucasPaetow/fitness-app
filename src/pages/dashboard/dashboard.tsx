//@ts-nocheck

import React from "react";
import Button from "components/button";
import { useAuthDispatch } from "contexts";
import { logoutUser } from "api/firebase";
import { CardLayout, SectionLayout, PageLayout } from "components/layout";
import styles from "./Dashboard.module.css";

const Dashboard = (props: any) => {
	const dispatchAuth = useAuthDispatch();

	const handleClick = async (
		event: React.MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		await logoutUser();
		await dispatchAuth({ type: "nouser" });
		return;
	};

	return (
		<PageLayout
			headline="Dashboard"
			subheadline="Hello, Name. Nice to have you back again. You have 1 workout for today">
			<SectionLayout headline="Your Progress">
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<div className={styles.dashboardFakeContent}></div>
						<a href="#" className={styles.dashboardTextLink}>
							show more progress details
						</a>
						<Button
							className={styles.dashboardButton}
							customOnClick={handleClick}>
							Logout
						</Button>
					</>
				</CardLayout>
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<div className={styles.dashboardFakeContent}></div>
						<a href="#" className={styles.dashboardTextLink}>
							show more progress details
						</a>
						<Button
							className={styles.dashboardButton}
							customOnClick={handleClick}>
							Logout
						</Button>
					</>
				</CardLayout>
			</SectionLayout>
			<SectionLayout headline="Your Progress">
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<div className={styles.dashboardFakeContent}></div>
						<a href="#" className={styles.dashboardTextLink}>
							show more progress details
						</a>
						<Button
							className={styles.dashboardButton}
							customOnClick={handleClick}>
							Logout
						</Button>
					</>
				</CardLayout>
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<div className={styles.dashboardFakeContent}></div>
						<a href="#" className={styles.dashboardTextLink}>
							show more progress details
						</a>
						<Button
							className={styles.dashboardButton}
							customOnClick={handleClick}>
							Logout
						</Button>
					</>
				</CardLayout>
			</SectionLayout>
		</PageLayout>
	);
};

export default Dashboard;
