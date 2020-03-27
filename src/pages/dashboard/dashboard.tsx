//@ts-nocheck

import React from "react";
import styled from "styled-components";
import Button from "components/button";
import { useAuthDispatch } from "contexts";
import { logoutUser } from "api/firebase";
import { CardLayout, SectionLayout, PageLayout } from "components/layout";

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
						<FakeContent></FakeContent>
						<TextLink>show more progress details</TextLink>
						<StyledButton customOnClick={handleClick}>
							Logout
						</StyledButton>
					</>
				</CardLayout>
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<FakeContent></FakeContent>
						<TextLink>show more progress details</TextLink>
						<StyledButton customOnClick={handleClick}>
							Logout
						</StyledButton>
					</>
				</CardLayout>
			</SectionLayout>
			<SectionLayout headline="Your Progress">
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<FakeContent></FakeContent>
						<TextLink>show more progress details</TextLink>
						<StyledButton customOnClick={handleClick}>
							Logout
						</StyledButton>
					</>
				</CardLayout>
				<CardLayout
					headline="This Month"
					subheadline="Motivational quote or something similar here">
					<>
						<FakeContent></FakeContent>
						<TextLink>show more progress details</TextLink>
						<StyledButton customOnClick={handleClick}>
							Logout
						</StyledButton>
					</>
				</CardLayout>
			</SectionLayout>
		</PageLayout>
	);
};

const StyledButton = styled(Button)`
	display: block;
	justify-self: end;
	width: max-content;
`;

const FakeContent = styled.div`
	width: 100%;
	height: 8rem;
	background-color: #575757;
	border-radius: 1rem;
`;
const TextLink = styled.a`
	text-decoration: underline;
	color: white;
	position: relative;
	padding-left: 1.5rem;

	&::before {
		content: " ";
		position: absolute;
		height: 1rem;
		width: 1rem;
		border: 1px solid white;
		border-radius: 50%;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
	}
`;

export default Dashboard;
