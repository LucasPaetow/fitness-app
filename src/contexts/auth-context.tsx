import React from "react";

const AuthStateContext = React.createContext<State | undefined>(undefined);
const AuthDispatchContext = React.createContext<Dispatch | undefined>(
	undefined
);

type Action =
	| { type: "pending" }
	| { type: "user"; payload: object }
	| { type: "nouser" };
type Dispatch = (action: Action) => void;
type State = {
	status: string;
	user: object | null;
};
type AuthProviderProps = { children: React.ReactNode };

const initalState = {
	status: "pending", //pending //user //nouser
	user: null // null // fb auth object
};

const authReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "pending": {
			return { ...state, status: "pending" };
		}
		case "user": {
			return { ...state, status: "user", user: action.payload };
		}
		case "nouser": {
			return { ...state, status: "nouser", user: null };
		}
		default: {
			console.log(action);
			throw new Error(`Unhandled action type`);
		}
	}
};

const ProvideAuthContext: React.FC<AuthProviderProps> = ({ children }) => {
	//@ts-ignore
	const [authState, authDispatch] = React.useReducer(
		authReducer,
		initalState
	);
	return (
		<AuthStateContext.Provider value={authState}>
			<AuthDispatchContext.Provider value={authDispatch}>
				{children}
			</AuthDispatchContext.Provider>
		</AuthStateContext.Provider>
	);
};

const useAuthState = () => {
	const context = React.useContext(AuthStateContext);
	if (context === undefined) {
		throw new Error("useAuthState must be used within a AuthProvider");
	}
	return context;
};
const useAuthDispatch = () => {
	const context = React.useContext(AuthDispatchContext);
	if (context === undefined) {
		throw new Error("useAuthDispatch must be used within a AuthProvider");
	}
	return context;
};

export default ProvideAuthContext;
export { useAuthState, useAuthDispatch };
