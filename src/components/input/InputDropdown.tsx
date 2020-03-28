import React from "react";
import styles from "./Input.module.css";

export interface DropdownInputProps {
	options: string[];
	label: string;
}

const Dropdown = props => {
	const { options, label, state, setState } = props;
	return (
		<label className={styles.inputDropdownLabel}>
			{label}
			<select
				className={styles.inputDropdownSelect}
				disabled={!options.length}
				id={label}
				onBlur={e => setState(e.target.value)}
				onChange={e => setState(e.target.value)}
				value={state}>
				{options.map(item => (
					<option key={label + item} value={item}>
						{item}
					</option>
				))}
			</select>
		</label>
	);
};

export const useDropdown = (props: DropdownInputProps) => {
	const [state, setState] = React.useState<string>("");

	return [
		<Dropdown state={state} setState={setState} {...props} />,
		state,
		setState
	];
};
