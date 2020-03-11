import React from "react";
//@ts-ignore
import { useRoutes } from "react-router-dom";
import Navbar from "../components/navbar";
import { AUTHENTICATED_ROUTES } from "../router";

const AuthenticatedApp: React.FC = () => {
	const routes = useRoutes(AUTHENTICATED_ROUTES);
	return (
		<>
			{routes}
			<Navbar routes={AUTHENTICATED_ROUTES}></Navbar>
		</>
	);
};

export default AuthenticatedApp;
