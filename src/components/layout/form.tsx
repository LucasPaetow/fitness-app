//@ts-nocheck
import React from "react";
import styled from "styled-components";

export const FormLayout = ({ children }) => {
	console.log("decider", children);
	return (
		<Form>
			{React.Children.map(children, child => {
				if (child.props.children) {
					return DualFormRow(child.props);
				}

				return SingularFormRow(child);
			})}
		</Form>
	);
};

const SingularFormRow = input => {
	console.log("single", input);
	return <SingleRow>{input}</SingleRow>;
};

const DualFormRow = ({ children }) => {
	console.log("dual", children);
	return (
		<DualRows>
			{React.Children.map(children, child => (
				<DualRow>{child}</DualRow>
			))}
		</DualRows>
	);
};

const Form = styled.form`
	background-color: grey;
	width: 100%;
	border-radius: 0.5rem;
	border: 1px solid darkgrey;
`;

const SingleRow = styled.div`
	padding: 0.5rem;
	display: grid;
	border-bottom: 1px solid darkgrey;
	&:last-of-type {
		border-bottom: 1px solid transparent;
	}
`;

const DualRows = styled.span`
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 0.5rem;
	justify-content: start;
	border-bottom: 1px solid darkgrey;
	&:last-of-type {
		border-bottom: 1px solid transparent;
	}
`;

const DualRow = styled.div`
	padding: 0.5rem;
	display: grid;
	border-bottom: 1px solid darkgrey;
	&:last-of-type {
		border-bottom: 1px solid transparent;
	}
`;
