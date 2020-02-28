//@ts-nocheck
import React from "react";
import { Modal, Toast } from "../components/notifications";

const NotificationStateContext = React.createContext<State | undefined>(
	undefined
);
const NotificationDispatchContext = React.createContext<Dispatch | undefined>(
	undefined
);

type Action =
	| { type: "modal"; payload: JSX.Element }
	| { type: "toast"; payload: JSX.Element }
	| { type: "close" };
type Dispatch = (action: Action) => void;
type State = {
	content: JSX.Element;
};
type NotificationProviderProps = { children: React.ReactNode };

const initalState = {
	content: null
};

const notificationReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "modal": {
			return { ...state, content: <Modal>{action.payload}</Modal> };
		}
		case "toast": {
			return { ...state, content: <Toast>{action.payload}</Toast> };
		}
		case "close": {
			return { ...state, content: null };
		}
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
};

const ProvideNotification: React.FC<NotificationProviderProps> = ({
	children
}) => {
	//@ts-ignore
	const [notificationState, notificationDispatch] = React.useReducer(
		notificationReducer,
		initalState
	);
	return (
		<NotificationStateContext.Provider value={notificationState}>
			<NotificationDispatchContext.Provider value={notificationDispatch}>
				{children}
				{!!notificationState.content && notificationState.content}
			</NotificationDispatchContext.Provider>
		</NotificationStateContext.Provider>
	);
};

const useNotificationState = () => {
	const context = React.useContext(NotificationStateContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationState must be used within a NotificationProvider"
		);
	}
	return context;
};
const useNotificationDispatch = () => {
	const context = React.useContext(NotificationDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationDispatch must be used within a NotificationProvider"
		);
	}
	return context;
};

export default ProvideNotification;
export { useNotificationState, useNotificationDispatch };
