import React from "react";
import styled from "styled-components";

type LayoutProps = {
	children: React.ReactNode;
	headline: string;
	subheadline?: string;
};

export const PageLayout: React.FC<LayoutProps> = props => {
	const { children, headline, subheadline } = props;
	return (
		<Layout>
			<Brand>
				<BrandIcon></BrandIcon>
				<BrandHeadline>Brand</BrandHeadline>
			</Brand>
			<Header>
				<Headline>{headline}</Headline>
				<Subline>{subheadline}</Subline>
			</Header>

			<ChildrenWrapper>{children}</ChildrenWrapper>
		</Layout>
	);
};

const Layout = styled.article`
	min-height: 100vh;
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-template-rows: 4rem;
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;
	background-color: #181818;
	padding-bottom: 8rem;
`;

const Header = styled.header`
	grid-column: 2/3;
`;

const Headline = styled.h1`
	font-size: 2rem;
	line-height: 100%;
	color: white;
`;

const Subline = styled.p`
	padding-top: 1rem;
	color: white;
	font-weight: bold;
`;

const Brand = styled.aside`
	grid-column: 2/3;
	padding-top: 2rem;
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 1rem;
	grid-auto-columns: min-content;
`;

const BrandIcon = styled.div`
	height: 2rem;
	width: 2rem;
	background-color: lightgrey;
	content: " ";
	border-radius: 50%;
`;

const BrandHeadline = styled.h4`
	color: lightgrey;
	font-size: 1.5rem;
`;

const ChildrenWrapper = styled.div`
	grid-column: 1/4;
`;
