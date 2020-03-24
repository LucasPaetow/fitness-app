import React from "react";
import styled from "styled-components";

export interface RadioInputProps {
	content: string[];
	name: string;
}

const RadioInput = props => {
	const { content, name, state, setState } = props;
	return (
		<RadioGroup>
			{content.map(radioButton => (
				<Radio key={name + "radio"}>
					<Input
						type="radio"
						id={radioButton + "radioInput"}
						value={state}
						checked={state === radioButton}
						onChange={e => setState(e.target.value)}
					/>
					<Label htmlFor={radioButton + "radioInput"}>
						{radioButton}
					</Label>
				</Radio>
			))}
		</RadioGroup>
	);
};

export const useRadioInput = (props: RadioInputProps) => {
	const [state, setState] = React.useState<string>("");

	return [
		<RadioInput state={state} setState={setState} {...props} />,
		state,
		setState
	];
};

const RadioGroup = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	grid-gap: 0.5rem;
	padding: 0.5rem 0;
`;

const Radio = styled.div`
	display: grid;
	width: max-content;
	padding: 0.5rem 0.5rem 0 0;
`;

const Label = styled.label`
	font-weight: bold;
	font-size: 1rem;
	background-color: white;
	padding: 0.75rem 1rem;
	border-radius: 0.25rem;
	border: 2px solid transparent;
	width: max-content;
`;

const Input = styled.input`
	opacity: 0;
	position: fixed;
	width: 0;
	&:checked + label {
		border: 2px solid black;
	}
`;
