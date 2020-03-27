import React from "react";
//@ts-ignore
import { Routes, Route } from "react-router-dom";
import { NavbarUnauthenticated } from "components/navbar";
import Home from "pages/homepage";
import Signup from "pages/signup";
import Login from "pages/login";
import RedirectComponent from "router";

const UnauthenticatedApp: React.FC = () => {
	return (
		<>
			<NavbarUnauthenticated />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="signup" element={<Signup />} />
				<Route path="login" element={<Login />} />
				<Route
					path="*"
					element={
						<RedirectComponent to={"/login"} record={"navigate"} />
					}
				/>
			</Routes>
		</>
	);
};

export default UnauthenticatedApp;
