import React from "react";
import styled from "styled-components";

export interface DropdownInputProps {
	options: string[];
	label: string;
}

export const useDropdown = (props: DropdownInputProps) => {
	const { label, options } = props;
	const [state, setState] = React.useState<string | undefined>();
	const Dropdown = () => (
		<Label htmlFor={label}>
			{label}
			<StyledSelected
				id={label}
				value={state}
				onChange={e => setState(e.target.value)}
				onBlur={e => setState(e.target.value)}
				disabled={!options.length}>
				{options.map(item => (
					<option key={label + item} value={item}>
						{item}
					</option>
				))}
			</StyledSelected>
		</Label>
	);
	return [state, Dropdown];
};

const Label = styled.label`
	font-weight: bold;
	font-size: 1rem;
	display: grid;
	color: white;
`;

const StyledSelected = styled.select`
	margin-top: 0.25rem;
	padding: 0.75rem 2rem 0.75rem 1rem;
	border-radius: 0.25rem;
	border: 1px solid grey;
	width: max-content;
	box-shadow: 0px 2px 5px 1px rgba(0, 0, 0, 0.05);
	font-size: 1rem;
	font-weight: bold;
	background-color: #7d7d7d;
	margin-bottom: 1rem;
	display: block;
	appearance: none;
	background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E");
	background-repeat: no-repeat, repeat;
	background-position: right 0.7em top 50%, 0 0;
	background-size: 0.65em auto, 100%;

	&::-ms-expand {
		display: none;
	}
	&:hover {
		border-color: #888;
	}
	&:focus {
		border-color: #aaa;
		box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
		box-shadow: 0 0 0 3px -moz-mac-focusring;
		color: #222;
		outline: none;
	}
`;
