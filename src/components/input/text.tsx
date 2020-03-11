import React from "react";
import styled from "styled-components";

export interface TextInputProps {
	type: string;
	placeholder: string;
	label: string;
	autofocus: boolean;
}

export const useTextInput = (props: TextInputProps) => {
	const { type, placeholder, label, autofocus = false } = props;
	const [state, setState] = React.useState<string | undefined>();

	const randomID = () =>
		Math.random()
			.toString(36)
			.substr(2, 9);

	const id = label + randomID();

	const TextInput = () => (
		<Label htmlFor={id}>
			{label}
			<StyledInput
				id={id}
				type={type}
				value={state}
				placeholder={placeholder}
				onChange={e => setState(e.target.value)}
				autoFocus={autofocus}
			/>
		</Label>
	);

	return [state, TextInput, setState];
};

const Label = styled.label`
	font-weight: bold;
	font-size: 1rem;
	color: white;
`;

const StyledInput = styled.input`
	margin-top: 0.25rem;
	padding: 0.75rem 1rem;
	border-radius: 0.25rem;
	border: 1px solid grey;
	width: 100%;
	box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);
	background-color: #7d7d7d;
	font-size: 1rem;
	font-weight: bold;
	margin-bottom: 1rem;

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

	&::placeholder {
		color: #3b3a3a;
	}
`;
