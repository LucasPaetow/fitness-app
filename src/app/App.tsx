//@ts-nocheck
import React, { useEffect } from "react";
import { useAuth } from "../contexts/auth-context";
import GlobalStyle from "../styles";
import { auth } from "../api/firebase";

const loadAuthenticatedApp = () => import("./authenticated-app");
const AuthenticatedApp = React.lazy(loadAuthenticatedApp);
const UnauthenticatedApp = React.lazy(() => import("./unauthenticated-app"));

const App: React.FC = () => {
	const [user, setUser] = useAuth();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				setUser(user);
			} else {
				setUser(false);
			}
		});
		return () => unsubscribe();
	}, [setUser]);

	useEffect(() => {
		loadAuthenticatedApp();
	}, []);

	return (
		<>
			<GlobalStyle />
			<React.Suspense fallback={<div>loading</div>}>
				{user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
			</React.Suspense>
		</>
	);
};

export default App;
