import React from "react";
//@ts-ignore
import { Routes, Route } from "react-router-dom";
import { NavbarAuthenticated } from "components/navbar";

import Dashboard from "pages/dashboard";
import NewWorkout from "pages/new-workout";
import RedirectComponent from "router";
import ProvideNewWorkoutContext from "contexts";

const AuthenticatedApp: React.FC = () => {
	return (
		<>
			<NavbarAuthenticated />
			<Routes>
				<Route path="/" element={<Dashboard />}></Route>
				<Route
					path="create-your-workout"
					element={
						<ProvideNewWorkoutContext>
							<NewWorkout />
						</ProvideNewWorkoutContext>
					}
				/>
				<Route
					path="*"
					element={<RedirectComponent to={"/"} record={""} />}
				/>
			</Routes>
		</>
	);
};

export default AuthenticatedApp;
