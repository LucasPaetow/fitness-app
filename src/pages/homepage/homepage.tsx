import React from "react";
import styled from "styled-components";
//@ts-ignore
import { Link, useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/button";

const Homepage = () => {
	const location = useLocation();
	const navigate = useNavigate();
	console.log(location, navigate);
	return (
		<Layout>
			<Header>
				<Headline>hello, homepage</Headline>
				<Subline>
					Welcome, please continue here to the dashboard and have fun
					along the way.
				</Subline>
			</Header>

			<ButtonWrapper to="/dashboard">
				<Button>Go to dashboard</Button>
			</ButtonWrapper>
		</Layout>
	);
};

const Layout = styled.article`
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

const ButtonWrapper = styled(Link)`
	grid-column: 2/3;
`;

export default Homepage;
