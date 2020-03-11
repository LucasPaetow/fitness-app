import React from "react";
import styled from "styled-components";

type CardProps = {
	children: React.ReactNode;
	headline: string;
	subheadline?: string;
};

export const CardLayout: React.FC<CardProps> = props => {
	const { children, headline, subheadline } = props;
	return (
		<Section>
			<Header>
				<Headline>{headline}</Headline>
				<Subline>{subheadline}</Subline>
			</Header>
			<ChildrenWrapper>{children}</ChildrenWrapper>
		</Section>
	);
};

const Section = styled.section`
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-row-gap: 1rem;
	background-color: #3b3a3a;
	padding: 2rem 0;
`;

const Header = styled.header`
	grid-column: 2/3;
`;

const Headline = styled.h4`
	font-size: 1rem;
	line-height: 100%;
	color: white;
`;

const Subline = styled.p`
	padding-top: 0.5rem;
	color: white;
	font-weight: bold;
`;

const ChildrenWrapper = styled.div`
	grid-column: 2/3;
	display: grid;
	grid-row-gap: 1rem;
`;
