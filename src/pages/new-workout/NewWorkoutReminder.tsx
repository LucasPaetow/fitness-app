//@ts-nocheck
import React from "react";
import { useDropdown } from "components/input";
import { CardLayout } from "components/layout";
import Button from "components/button";
import styles from "./NewWorkout.module.css";

export const useReminderModal = props => {
	const [state, setState] = React.useState("");
	const [RepeatDropdown, repeatDropdownState] = useDropdown({
		label: "repeat every ...",
		options: ["don't repeat", "day", "week", "month", "year", "custom"]
	});
	const { handleClick } = props;
	const ReminderModal = () => (
		<CardLayout headline="Select a date">
			<>
				<Button handleClick={handleClick}>hello</Button>
			</>
		</CardLayout>
	);

	return [state, ReminderModal];
};
