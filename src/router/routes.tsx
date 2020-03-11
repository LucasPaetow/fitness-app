import React from "react";
import Home from "../pages/homepage";
import Signup from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import NewWorkout from "../pages/new-workout";
import RedirectComponent from "./redirect";

export type RouteProps = {
	path: string;
	name: string;
	showIn: string;
	element?: React.ReactNode;
	modal?: React.ReactNode;
	children?: RouteProps[];
	redirectTo?: string;
};

const AUTHENTICATED_ROUTES: RouteProps[] = [
	{
		path: "/",
		name: "home",
		showIn: "navbar",
		element: <Dashboard />
	},
	{
		path: "/create-your-workout",
		name: "new workout",
		showIn: "navbar",
		element: <NewWorkout />
	},
	{
		path: "*",
		name: "fallback",
		showIn: "none",
		element: <RedirectComponent to={"/"} record={""} />,
		modal: <h1>hello</h1>
	}
];

const UNAUTHENTICATED_ROUTES: RouteProps[] = [
	{
		path: "/",
		name: "home",
		showIn: "navbar",
		element: <Home />,
		modal: <h1>hello</h1>
	},
	{
		path: "/login",
		name: "login",
		showIn: "navbar",
		element: <Login />
	},
	{
		path: "/signup",
		name: "signup",
		showIn: "navbar",
		element: <Signup />
	},
	{
		path: "*",
		name: "fallback",
		showIn: "none",
		element: <RedirectComponent to={"/login"} record={"navigate"} />
	}
];

export { UNAUTHENTICATED_ROUTES, AUTHENTICATED_ROUTES };
