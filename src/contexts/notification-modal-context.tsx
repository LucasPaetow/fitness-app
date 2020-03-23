import React from "react";
import { Modal } from "../components/notifications";

//types
type ModalAction =
	| { type: "modal"; payload: ModalActionPayload }
	| { type: "toast"; payload: ModalActionPayload }
	| { type: "close" };
type ModalActionPayload = { content: JSX.Element; position: string };
type ModalDispatch = (action: ModalAction) => void;
type ModalState = {
	content: JSX.Element;
};
type ModalProviderProps = { children: React.ReactNode };

//constants
const ModalStateContext = React.createContext<ModalState | undefined>(
	undefined
);
const ModalDispatchContext = React.createContext<ModalDispatch | undefined>(
	undefined
);
const initalState = {
	content: null
};

const modalReducer = (state: ModalState, action: ModalAction) => {
	switch (action.type) {
		case "modal": {
			return {
				...state,
				content: (
					<Modal position={action.payload.position}>
						{action.payload.content}
					</Modal>
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

const ProvideModalContext: React.FC<ModalProviderProps> = ({ children }) => {
	//@ts-ignore
	const [modalState, modalDispatch] = React.useReducer(
		modalReducer,
		initalState
	);
	return (
		<ModalStateContext.Provider value={modalState}>
			<ModalDispatchContext.Provider value={modalDispatch}>
				{children}
				{!!modalState.content && modalState.content}
			</ModalDispatchContext.Provider>
		</ModalStateContext.Provider>
	);
};

const useModalState = () => {
	const context = React.useContext(ModalStateContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationState must be used within a NotificationProvider"
		);
	}
	return context;
};
const useModalDispatch = () => {
	const context = React.useContext(ModalDispatchContext);
	if (context === undefined) {
		throw new Error(
			"useNotificationDispatch must be used within a NotificationProvider"
		);
	}
	return context;
};

export { useModalState, useModalDispatch };
export default ProvideModalContext;
