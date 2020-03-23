import React from "react";
import styled from "styled-components";

type StyledHamburgerProps = {
	hamburgerState: boolean;
};

type HamburgerProps = {
	hamburgerState: boolean;
};

const Hamburger = (props: HamburgerProps) => {
	const { hamburgerState } = props;

	return (
		<StyledHamburger hamburgerState={hamburgerState}>
			<StyledTop hamburgerState={hamburgerState}></StyledTop>
			<StyledMid></StyledMid>
			<StyledBottom hamburgerState={hamburgerState}></StyledBottom>
		</StyledHamburger>
	);
};

export default Hamburger;

const StyledHamburger = styled.div<StyledHamburgerProps>`
	width: 2rem;
	height: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
	transition: transform 0.2s ease-out;
	padding: 0.5rem;
	transform: ${props => (props.hamburgerState ? "rotate(-45deg)" : "")};
`;

const StyledTop = styled.div<StyledHamburgerProps>`
	background-color: white;
	border-radius: 0.3rem;
	width: 100%;
	height: 0.2rem;
	width: 50%;
	transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: right;
	transform: ${props =>
		props.hamburgerState ? "rotate(-90deg) translateX(0.15rem)" : ""};
`;

const StyledMid = styled.div`
	background-color: white;
	border-radius: 0.2rem;
	width: 100%;
	height: 0.2rem;
`;

const StyledBottom = styled.div<StyledHamburgerProps>`
	background-color: white;
	border-radius: 0.3rem;
	width: 100%;
	height: 0.2rem;
	width: 50%;
	align-self: flex-end;
	transition: transform 0.2s cubic-bezier(0.54, -0.81, 0.57, 0.57);
	transform-origin: left;
	transform: ${props =>
		props.hamburgerState ? "rotate(-90deg) translateX(-0.15rem)" : ""};
`;
