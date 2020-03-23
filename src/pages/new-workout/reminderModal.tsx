//@ts-nocheck
import React from "react";
import styled from "styled-components";
import { useDropdown } from "../../components/input";
import { CardLayout } from "../../components/layout";
import Button from "../../components/button";

export const useReminderModal = props => {
	const [state, setState] = React.useState("");
	const [repeatState, RepeatDropdown] = useDropdown({
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

const Layout = styled.article`
	height: calc(100vh - 4rem);
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-template-rows: 5rem;
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;
`;
