import React from "react";
import styled from "styled-components";

export interface RadioInputProps {
	content: string[];
	name: string;
}

export const useRadioInput = (props: RadioInputProps) => {
	const { content, name } = props;
	const [state, setState] = React.useState<string | undefined>();

	const randomID = () =>
		Math.random()
			.toString(36)
			.substr(2, 9);

	const key = name + randomID();

	const RadioInput = () => (
		<RadioGroup>
			{content.map(radioButton => (
				<Radio key={key + randomID()}>
					<Input
						type="radio"
						id={radioButton + key}
						value={state}
						checked={state === radioButton}
						onChange={e => setState(e.target.value)}
					/>
					<Label htmlFor={radioButton + key}>{radioButton}</Label>
				</Radio>
			))}
		</RadioGroup>
	);

	return [state, RadioInput, setState];
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
