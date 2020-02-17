import React, { FunctionComponent } from "react";
import { RenderRoutes } from "./RenderRoutes";
import { Redirect } from "react-router-dom";
import { auth } from "../api/firebase";

type RouteProps = {
	path: string;
	key: string;
	exact?: boolean;
	component: FunctionComponent;
	routes?: {
		path: string;
		key: string;
		exact: boolean;
		component: FunctionComponent;
	}[];
};

const ROUTES: RouteProps[] = [
	// { path: "/", key: "home", exact: true, component: homepage },
	// {
	// 	path: "/auth",
	// 	key: "auth",
	// 	component: RenderRoutes,
	// 	routes: [
	// 		{
	// 			path: "/auth/login",
	// 			key: "login",
	// 			exact: true,
	// 			component: login
	// 		},
	// 		{
	// 			path: "/auth/signup",
	// 			key: "signup",
	// 			exact: true,
	// 			component: signup
	// 		}
	// 	]
	// },
	// {
	// 	path: "/dashboard",
	// 	key: "dashboard",
	// 	exact: true,
	// 	component: props => {
	// 		let user = auth.currentUser;
	// 		if (!user) {
	// 			alert("You need to log in to access app routes");
	// 			return (
	// 				<Redirect exact from={"/dashboard"} to={"/auth/login"} />
	// 			);
	// 		}
	// 		return dashboard(props);
	// 	}
	// }
];

export default ROUTES;
