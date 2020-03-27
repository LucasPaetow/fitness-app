//@ts-nocheck
import React from "react";

const NewWorkoutStateContext = React.createContext(null);
const NewWorkoutDispatchContext = React.createContext(null);
const initalState = {
	name: "",
	repeat: {
		type: "default", //custom
		frequency: "none", //weekly, monthly, yearly
		weekdays: [], //monday, tuesday, wednesday...
		month: [], //1, 2, 3, 4, 5, ...
		year: { month: [], dayPrefix: "", day: "" }, //first, second : monday, tuesday...
		ends: { type: "afterOccurence", amounts: 0, date: null } //afterOccurence/afterAmounts/onDate
	},
	reminder: { type: "default", reminder: [{ amount: "", duration: "" }] },
	exercises: [
		{
			name: "",
			restTime: { amount: "", duration: "" },
			sets: [
				{ amount: 1, type: "reps" },
				{ amount: 1, type: "reps" },
				{ amount: 1, type: "reps" }
			]
		}
	]
};

const newWorkoutReducer = (state, action) => {
	switch (action.type) {
		case "name": {
			return {
				...state,
				name: action.payload.name
			};
		}
		case "close": {
			return { ...state, content: null };
		}
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
};

const ProvideNewWorkoutContext = ({ children }) => {
	//@ts-ignore
	const [newWorkoutState, newWorkoutDispatch] = React.useReducer(
		newWorkoutReducer,
		initalState
	);
	return (
		<NewWorkoutStateContext.Provider value={newWorkoutState}>
			<NewWorkoutDispatchContext.Provider value={newWorkoutDispatch}>
				{children}
			</NewWorkoutDispatchContext.Provider>
		</NewWorkoutStateContext.Provider>
	);
};

const useNewWorkoutState = () => {
	const context = React.useContext(NewWorkoutStateContext);
	if (context === undefined) {
		throw new Error(
			"useNewWorkoutState must be used within a NewWorkoutProvider"
		);
	}
	return context;
};
const useNewWorkoutDispatch = () => {
	const context = React.useContext(NewWorkoutDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useNewWorkoutDispatch must be used within a NewWorkoutProvider"
		);
	}
	return context;
};

export { useNewWorkoutState, useNewWorkoutDispatch };
export default ProvideNewWorkoutContext;
