import React from "react";
import { Toast } from "../components/notifications";

type ToastAction =
	| { type: "modal"; payload: ToastActionPayload }
	| { type: "toast"; payload: ToastActionPayload }
	| { type: "close" };
type ToastActionPayload = { content: JSX.Element; position: string };
type ToastDispatch = (action: ToastAction) => void;
type ToastState = {
	content: JSX.Element;
};
type ToastProviderProps = { children: React.ReactNode };

const ToastStateContext = React.createContext<ToastState | undefined>(
	undefined
);
const ToastDispatchContext = React.createContext<ToastDispatch | undefined>(
	undefined
);
const initalState = {
	content: null
};

const toastReducer = (state: ToastState, action: ToastAction) => {
	switch (action.type) {
		case "toast": {
			return {
				...state,
				content: (
					<Toast position={action.payload.position}>
						{action.payload.content}
					</Toast>
				)
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

const ProvideToastContext: React.FC<ToastProviderProps> = ({ children }) => {
	//@ts-ignore
	const [toastState, toastDispatch] = React.useReducer(
		toastReducer,
		initalState
	);
	return (
		<ToastStateContext.Provider value={toastState}>
			<ToastDispatchContext.Provider value={toastDispatch}>
				{children}
				{!!toastState.content && toastState.content}
			</ToastDispatchContext.Provider>
		</ToastStateContext.Provider>
	);
};

const useToastState = () => {
	const context = React.useContext(ToastStateContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationState must be used within a NotificationProvider"
		);
	}
	return context;
};
const useToastDispatch = () => {
	const context = React.useContext(ToastDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationDispatch must be used within a NotificationProvider"
		);
	}
	return context;
};

export { useToastState, useToastDispatch };
export default ProvideToastContext;
