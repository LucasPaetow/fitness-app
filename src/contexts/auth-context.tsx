import React from "react";

const AuthStateContext = React.createContext<State | undefined>(undefined);
const AuthDispatchContext = React.createContext<Dispatch | undefined>(
	undefined
);

type Action =
	| { type: "loading" }
	| { type: "auth"; payload: object }
	| { type: "logout" };
type Dispatch = (action: Action) => void;
type State = {
	status: boolean;
	user: object | null;
};
type AuthProviderProps = { children: React.ReactNode };

const initalState = {
	status: "idle",
	user: null
};

const authReducer = (state: State, action: Action) => {
	switch (action.type) {
		case "loading": {
			return { ...state, status: "loading" };
		}
		case "auth": {
			return { ...state, status: "auth", user: action.payload };
		}
		case "logout": {
			return { ...state, status: "idle", user: null };
		}
		default: {
			throw new Error(`Unhandled action type`);
		}
	}
};

const ProvideAuth: React.FC<AuthProviderProps> = ({ children }) => {
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

export default ProvideAuth;
export { useAuthState, useAuthDispatch };
