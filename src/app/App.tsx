//@ts-nocheck
import React, { useEffect } from "react";
import { useAuthDispatch, useAuthState } from "../contexts";
import GlobalStyle from "../styles";
import { auth } from "../api/firebase";

const loadAuthenticatedApp = () => import("./authenticated-app");
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

const App: React.FC = () => {
	const authDispatch = useAuthDispatch();
	const authState = useAuthState();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				authDispatch({ type: "auth", payload: user });
			} else {
				authDispatch({ type: "logout" });
			}
		});
		return () => unsubscribe();
	}, [authDispatch]);

	useEffect(() => {
		loadAuthenticatedApp();
	}, []);

	return (
		<>
			<GlobalStyle />
			<React.Suspense fallback={<div>loading</div>}>
				{authState.user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
			</React.Suspense>
		</>
	);
};

export default App;
