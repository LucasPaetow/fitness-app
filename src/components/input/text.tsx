//@ts-nocheck
import React from "react";
import styled from "styled-components";

interface TextInputProps {
	type: string;
	placeholder: string;
	label: string;
	autofocus: boolean;
}

const TextInput = props => {
	const {
		type,
		label,
		placeholder,
		autofocus = false,
		state,
		setState
	} = props;
	return (
		<Label htmlFor={"input" + label}>
			{label}
			<Input
				id={"input" + label}
				type={type}
				value={state}
				placeholder={placeholder}
				onChange={e => setState(e.target.value)}
				autoFocus={autofocus}
			/>
		</Label>
	);
};

export const useTextInput = (props: TextInputProps) => {
	const [state, setState] = React.useState<string>("");

	return [
		state,
		<TextInput state={state} setState={setState} {...props} />,
		setState
	];
};

const Label = styled.label`
	font-weight: bold;
	font-size: 0.8rem;
	color: white;
	padding-left: 0.5rem;

	&:focus-within {
		color: orange;
	}
	&:visited {
		color: red;
	}
`;

const Input = styled.input`
	padding: 0.5rem;
	margin-left: -0.5rem;
	border-radius: 0.5rem;
	border: 1px solid grey;
	width: 100%;
	background-color: #7d7d7d;
	font-size: 1rem;
	font-weight: bold;

	&::placeholder {
		color: #3b3a3a;
	}
	&:focus {
		color: orange;
	}
`;
