import React from "react";
import styles from "./Input.module.css";

export interface RadioInputProps {
	content: string[];
	name: string;
}

const RadioInput = props => {
	const { content, name, state, setState } = props;
	return (
		<div className={styles.inputRadioGroup}>
			{content.map(radioButton => (
				<div key={name + "radio"} className={styles.inputRadio}>
					<input
						checked={state === radioButton}
						className={styles.inputRadioLabel}
						id={radioButton + "radioInput"}
						onChange={e => setState(e.target.value)}
						type="radio"
						value={state}
					/>
					<label
						htmlFor={radioButton + "radioInput"}
						className={styles.inputRadioLabel}>
						{radioButton}
					</label>
				</div>
			))}
		</div>
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
