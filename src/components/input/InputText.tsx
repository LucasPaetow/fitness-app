import React from "react";
import styles from "./Input.module.css";

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
		<label htmlFor={"input" + label} className={styles.inputTextLabel}>
			{label}
			<input
				className={styles.inputTextInput}
				id={"input" + label}
				type={type}
				value={state}
				placeholder={placeholder}
				onChange={e => setState(e.target.value)}
				autoFocus={autofocus}
			/>
		</label>
	);
};

export const useTextInput = (props: TextInputProps) => {
	const [state, setState] = React.useState<string>("");

	return [
		<TextInput state={state} setState={setState} {...props} />,
		state,
		setState
	];
};
