import React from "react";
//@ts-ignore
import { useRoutes } from "react-router-dom";
import Navbar from "../components/navbar";
import { UNAUTHENTICATED_ROUTES } from "../router";

const UnauthenticatedApp: React.FC = () => {
	const routes = useRoutes(UNAUTHENTICATED_ROUTES);
	return (
		<>
			<Navbar routes={UNAUTHENTICATED_ROUTES}></Navbar>
			{routes}
		</>
	);
};

export default UnauthenticatedApp;

//<Navbar routes={UNAUTHENTICATED_ROUTES}></Navbar>
