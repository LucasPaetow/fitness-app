import React from "react";
import styled from "styled-components";

const Button = (props: ButtonProps) => {
	const { children, className, customOnClick } = props;
	return customOnClick ? (
		<StyledButton
			className={className}
			onClick={event => customOnClick(event)}>
			{children}
		</StyledButton>
	) : (
		<StyledButton className={className}>{children}</StyledButton>
	);
};

interface ButtonProps {
	children: React.ReactNode;
	customOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string | undefined;
}

const StyledButton = styled.button`
	padding: 0.75rem 1rem;
	border-radius: 0.35rem;
	max-width: 10rem;
	position: relative;

	text-transform: uppercase;
	font-size: 0.8rem;
	font-weight: bold;
	box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);
	background-image: linear-gradient(180deg, #cf5b4a 0%, #cf4c57 100%);
	cursor: pointer;
	color: white;

	&:before {
		position: absolute;

		content: " ";
		border-radius: 0.5rem;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.3);
		opacity: 0;
		transition: opacity 500ms;
	}

	&:hover::before {
		opacity: 1;
	}
	&:active {
		transform: translateY(0.1rem);
	}
`;

export default Button;
