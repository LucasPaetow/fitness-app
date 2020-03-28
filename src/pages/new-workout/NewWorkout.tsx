//@ts-nocheck
import React from "react";
import Button from "components/button";
import { useTextInput, useDropdown } from "components/input";
import { useModalDispatch } from "contexts";
import {
	CardLayout,
	SectionLayout,
	PageLayout,
	FormLayout,
	SingularFormRow
} from "components/layout";
import { useReminderModal } from "pages/new-workout/NewWorkoutReminder";
import { useNewWorkoutState, useNewWorkoutDispatch } from "contexts";
import styles from "./NewWorkout.module.css";

const NewWorkout = () => {
	const newWorkoutState = useNewWorkoutState();
	const newWorkoutDispatch = useNewWorkoutDispatch();
	const modalDispatch = useModalDispatch();
	const [TextInput, textInputState] = useTextInput({
		type: "text",
		label: "Name of your Workout",
		placeholder: "e.g. brake your Back"
	});

	const [RepeatDropdown, repeatDropdownState] = useDropdown({
		label: "repeat every ...",
		options: ["don't repeat", "day", "week", "month", "year", "custom"]
	});
	const [ReminderDropdown, reminderDropdownState] = useDropdown({
		label: "remind me",
		options: ["don't remind me", "1 hour before", "1 day before", "custom"]
	});

	const handleClick = () => {
		console.log("modal button clicked");
	};
	const [ReminderModal, reminderModalState] = useReminderModal({
		handleClick
	});

	React.useEffect(() => {
		if (repeatDropdownState === "custom") {
			modalDispatch({
				type: "modal",
				payload: {
					content: <ReminderModal></ReminderModal>,
					position: "center bottom"
				}
			});
		}
	}, [modalDispatch, repeatDropdownState]);

	React.useEffect(() => {
		if (reminderDropdownState === "custom") {
			modalDispatch({
				type: "modal",
				payload: {
					content: <p>remind me when</p>,
					position: "center bottom"
				}
			});
		}
	}, [modalDispatch, reminderDropdownState]);

	React.useEffect(() => {
		console.log(newWorkoutState);

		// newWorkoutDispatch({
		// 	type: "name",
		// 	payload: {
		// 		name: "hello"
		// 	}
		// });
		console.log(newWorkoutDispatch);

		console.log(newWorkoutState);
	}, [newWorkoutDispatch, newWorkoutState]);

	return (
		<PageLayout
			headline="Create your next workout"
			subheadline="Challenge yourself and reap your rewards when others gasping at you">
			<SectionLayout headline="Your workout">
				<CardLayout
					headline="About your workout"
					subheadline="You can also enable reminders, which require your permission">
					<>
						<FormLayout>
							{TextInput}
							{RepeatDropdown}
							{ReminderDropdown}
						</FormLayout>
					</>
				</CardLayout>
			</SectionLayout>
		</PageLayout>
	);
};

export default NewWorkout;
