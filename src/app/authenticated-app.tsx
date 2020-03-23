import React from "react";
//@ts-ignore
import { useRoutes } from "react-router-dom";
import { NavbarAuthenticated } from "../components/navbar";
import { AUTHENTICATED_ROUTES } from "../router";

const AuthenticatedApp: React.FC = () => {
	const routes = useRoutes(AUTHENTICATED_ROUTES);
	return (
		<>
			<NavbarAuthenticated></NavbarAuthenticated>
			{routes}
		</>
	);
};

export default AuthenticatedApp;
