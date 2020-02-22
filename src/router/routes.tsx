import React, { FunctionComponent } from "react";
import { RenderRoutes } from "./RenderRoutes";

import Home from "../pages/homepage";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import RedirectComponent from "./redirect";

export type RouteProps = {
	path?: string;
	key?: string;
	exact?: boolean;
	status?: string;
	component?: FunctionComponent;
	routes?: RouteProps;
	modal?: FunctionComponent;
};

const AUTHENTICATED_ROUTES: RouteProps[] = [
	{
		path: "/",
		key: "home",
		exact: true,
		status: "default",
		component: Dashboard
	},
	{
		path: "/create-your-workout",
		key: "new workout",
		exact: true,
		status: "default",
		component: Dashboard
	},
	{
		key: "fallback",
		status: "fallback",
		//@ts-ignore
		component: () => {
			return RedirectComponent({ to: "/", record: "" });
		},
		modal: () => {
			return <h1>hello</h1>;
		}
	}
];

const UNAUTHENTICATED_ROUTES: RouteProps[] = [
	{ path: "/", key: "home", exact: true, status: "default", component: Home },
	{
		path: "/login",
		key: "login",
		exact: true,
		status: "default",
		component: Login
	},
	{
		path: "/signup",
		key: "signup",
		exact: true,
		status: "default",
		component: Signup
	},
	{
		key: "fallback",
		status: "fallback",
		component: () => {
			// return <h1>Not Found!</h1>;
			return RedirectComponent({ to: "/login", record: "history" });
		}
	}
];

export { UNAUTHENTICATED_ROUTES, AUTHENTICATED_ROUTES };
