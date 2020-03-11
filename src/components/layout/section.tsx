import React from "react";
import styled from "styled-components";

type SectionProps = {
	children: React.ReactNode;
	headline: string;
};

export const SectionLayout: React.FC<SectionProps> = props => {
	const { children, headline } = props;
	return (
		<Section>
			<Header>
				<Headline>{headline}</Headline>
			</Header>
			<ChildrenWrapper>{children}</ChildrenWrapper>
		</Section>
	);
};

const Section = styled.section`
	height: 100%;
	width: 100%;
	display: grid;
	grid-auto-rows: min-content;
	grid-row-gap: 1rem;
	position: relative;
	padding-bottom: 4rem;
`;

const Header = styled.header`
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	width: 100%;
	background-color: #181818;
	z-index: 10;
`;

const Headline = styled.h2`
	font-size: 1.5rem;
	line-height: 100%;
	color: white;
	padding: 2rem 0 1rem 0;
	grid-column: 2/3;
`;

const ChildrenWrapper = styled.div`
	display: grid;
	grid-row-gap: 0.5rem;
`;
