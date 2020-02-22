//@ts-nocheck

import React from "react";
import styled from "styled-components";
import Button from "../../components/button";
import { useAuth } from "../../contexts/auth-context";
import { logoutUser } from "../../api/firebase";
import { useHistory } from "react-router-dom";

const Dashboard = (props: any) => {
	const [user, setUser] = useAuth();
	const history = useHistory();
	console.log(history);

	const handleClick = async (
		event: React.MouseEvent<HTMLButtonElement>
	): Promise<void> => {
		event.preventDefault();
		await logoutUser();
		await setUser(null);
		return;
	};

	return (
		<Layout>
			<Header>
				<Headline>hello, dashboard</Headline>
				<Subline>
					You made it to the dashboad! You are great. The only thing
					you can do now is to logout and do it again.
				</Subline>
			</Header>

			<StyledButton customOnClick={handleClick}>Logout</StyledButton>
		</Layout>
	);
};

const Layout = styled.section`
	height: calc(100vh - 4rem);
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-template-rows: 5rem;
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;

	&:before {
		content: "";
		grid-column: 1/4;
	}
`;

const Header = styled.header`
	grid-column: 2/3;
`;

const Headline = styled.h1`
	font-size: 3rem;
	line-height: 100%;
`;

const Subline = styled.p`
	padding-top: 1rem;
`;

const StyledButton = styled(Button)`
	display: block;
	grid-column: 2/3;
`;

export default Dashboard;
