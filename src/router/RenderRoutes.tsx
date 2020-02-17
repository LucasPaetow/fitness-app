//@ts-nocheck
import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";

type RouteProp = {
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

const RouteWithSubRoutes = (route: RouteProp): any => {
	return (
		<Route
			path={route.path}
			exact={route.exact}
			render={props => (
				<route.component {...props} routes={route.routes} />
			)}
		/>
	);
};

const RenderRoutes = ({ routes }: any) => {
	return (
		<Switch>
			{routes.map((route: any, index: number) => {
				return <RouteWithSubRoutes key={route.key} {...route} />;
			})}
			<Route component={() => <h1>Not Found!</h1>} />
		</Switch>
	);
};

export { RenderRoutes };

export default RouteWithSubRoutes;
