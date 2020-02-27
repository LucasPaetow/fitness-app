import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import { UNAUTHENTICATED_ROUTES, RenderRoutes } from "../router";

const UnauthenticatedApp: React.FC = () => {
	return (
		<BrowserRouter>
			<Navbar routes={UNAUTHENTICATED_ROUTES}></Navbar>
			<RenderRoutes routes={UNAUTHENTICATED_ROUTES} />
		</BrowserRouter>
	);
};

export default UnauthenticatedApp;
