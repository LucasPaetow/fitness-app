//@ts-nocheck
import React from "react";
import { useAuthDispatch, useAuthState } from "../contexts";
import GlobalStyle from "../styles";
import { auth } from "../api/firebase";

const loadAuthenticatedApp = () => import("./authenticated-app");
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

const App: React.FC = () => {
	const authDispatch = useAuthDispatch();
	const authState = useAuthState();

	React.useEffect(() => {
		//change the user property
		// can be pending // nouser // firebase-user-object
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				authDispatch({ type: "user", payload: user });
			} else {
				authDispatch({ type: "nouser" });
			}
		});
		return () => unsubscribe();
	}, [authDispatch]);

	React.useEffect(() => {
		loadAuthenticatedApp();
	}, []);

	const RenderStates = {
		user: <AuthenticatedApp />,
		nouser: <UnauthenticatedApp />,
		pending: <h3>Loading ...</h3>
	};

	return (
		<>
			<GlobalStyle />
			<React.Suspense fallback={<div>loading</div>}>
				{RenderStates[authState.status]}
			</React.Suspense>
		</>
	);
};

export default App;
