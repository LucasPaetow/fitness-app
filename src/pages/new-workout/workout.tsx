//@ts-nocheck
import React from "react";
import styled from "styled-components";
import Button from "../../components/button";
import { useTextInput, useDropdown } from "../../components/input";
import { useModalDispatch } from "../../contexts";
import {
	CardLayout,
	SectionLayout,
	PageLayout,
	FormLayout,
	SingularFormRow
} from "../../components/layout";
import { useReminderModal } from "./reminderModal";

const NewWorkout = () => {
	const modalDispatch = useModalDispatch();
	const [inputState, TextInput] = useTextInput({
		type: "text",
		label: "Name of your Workout",
		placeholder: "e.g. brake your Back"
	});

	const [repeatState, RepeatDropdown] = useDropdown({
		label: "repeat every ...",
		options: ["don't repeat", "day", "week", "month", "year", "custom"]
	});
	const [reminderState, ReminderDropdown] = useDropdown({
		label: "remind me",
		options: ["don't remind me", "1 hour before", "1 day before", "custom"]
	});

	const handleClick = () => {
		console.log("modal button clicked");
	};
	const [reminderModalState, ReminderModal] = useReminderModal({
		handleClick
	});

	React.useEffect(() => {
		if (repeatState === "custom") {
			modalDispatch({
				type: "modal",
				payload: {
					content: <ReminderModal></ReminderModal>,
					position: "center bottom"
				}
			});
		}
	}, [modalDispatch, repeatState]);

	React.useEffect(() => {
		if (reminderState === "custom") {
			modalDispatch({
				type: "modal",
				payload: {
					content: <p>remind me when</p>,
					position: "center bottom"
				}
			});
		}
	}, [modalDispatch, reminderState]);

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
							<RepeatDropdown />
							<ReminderDropdown />
						</FormLayout>
					</>
				</CardLayout>
			</SectionLayout>
		</PageLayout>
	);
};

export default NewWorkout;
