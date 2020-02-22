import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../navbar";
import { AUTHENTICATED_ROUTES, RenderRoutes } from "../../router";

const AuthenticatedApp: React.FC = () => {
	return (
		<BrowserRouter>
			<Navbar routes={AUTHENTICATED_ROUTES}></Navbar>
			<RenderRoutes routes={AUTHENTICATED_ROUTES} />
		</BrowserRouter>
	);
};

export default AuthenticatedApp;
