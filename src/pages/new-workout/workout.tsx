//@ts-nocheck
import React from "react";
import styled from "styled-components";
import Button from "../../components/button";
import { useTextInput, useDropdown } from "../../components/input";
import { useNotificationDispatch } from "../../contexts";
import { CardLayout, SectionLayout, PageLayout } from "../../components/layout";
import { useReminderModal } from "./reminderModal";

const NewWorkout = () => {
	const [textInputState, TextInput] = useTextInput({
		type: "text",
		placeholder: "e.g. Upper back",
		label: "Workout Name",
		autofocus: true
	});
	const [repeatState, RepeatDropdown] = useDropdown({
		label: "repeat every ...",
		options: ["don't repeat", "day", "week", "month", "year", "custom"]
	});
	const [reminderState, ReminderDropdown] = useDropdown({
		label: "remind me",
		options: ["don't remind me", "1 hour before", "1 day before", "custom"]
	});
	const notificationDispatch = useNotificationDispatch();

	const handleClick = () => {
		console.log("modal button clicked");
	};
	const [reminderModalState, ReminderModal] = useReminderModal({
		handleClick
	});

	React.useEffect(() => {
		if (repeatState === "custom") {
			notificationDispatch({
				type: "modal",
				payload: {
					content: <ReminderModal></ReminderModal>,
					position: "center bottom"
				}
			});
		}
	}, [notificationDispatch, repeatState]);

	React.useEffect(() => {
		if (reminderState === "custom") {
			notificationDispatch({
				type: "modal",
				payload: {
					content: <p>remind me when</p>,
					position: "center bottom"
				}
			});
		}
	}, [notificationDispatch, reminderState]);

	return (
		<PageLayout
			headline="Create your next workout"
			subheadline="Challenge yourself and reap your rewards when others gasping at you">
			<SectionLayout headline="Your workout">
				<CardLayout
					headline="About your workout"
					subheadline="You can also enable reminders, which require your permission">
					<>
						<form>
							<TextInput
								type="text"
								placeholder="The name of your Workout"
								label="Your Workout"
							/>
							<RepeatDropdown />
							<ReminderDropdown />
						</form>
					</>
				</CardLayout>
			</SectionLayout>
		</PageLayout>
	);
};

export default NewWorkout;
