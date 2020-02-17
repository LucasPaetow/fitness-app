import React from "react";
import styled from "styled-components";

const Input = (props: InputProps) => {
	const {
		value,
		handleChange,
		type,
		placeholder,
		label,
		autofocus = false
	} = props;

	return (
		<Label>
			{label}
			<StyledInput
				type={type}
				value={value}
				placeholder={placeholder}
				onChange={e => handleChange(e)}
				autoFocus={autofocus}
			/>
		</Label>
	);
};

interface InputProps {
	value: string;
	handleChange(e: React.SyntheticEvent<HTMLInputElement>): void;
	type: string;
	placeholder: string;
	label: string;
	autofocus: boolean;
}

const Label = styled.label`
	font-weight: bold;
	font-size: 1rem;
`;

const StyledInput = styled.input`
	margin-top: 0.25rem;
	padding: 0.75rem 1rem;
	border-radius: 0.25rem;
	border: 1px solid grey;
	width: 100%;
	box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);

	font-size: 1rem;

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

	&:active::before {
		opacity: 1;
	}
`;

export default Input;
