//@ts-nocheck
import React from "react";
import { Route, Switch } from "react-router-dom";

const RouteWithSubRoutes = (routeProp: any): any => {
	const { path, exact, routes } = routeProp;
	return (
		<Route
			path={path}
			exact={exact}
			render={(props: any) => (
				<routeProp.component {...props} routes={routes} />
			)}
		/>
	);
};

const RenderRoutes = ({ routes }: any): any => {
	return (
		<>
			<Switch>
				{routes.map((route: any, index: number) => {
					return <RouteWithSubRoutes key={route.key} {...route} />;
				})}
				{routes
					.filter(route => route.status === "fallback")
					.map(fallback => {
						return (
							<RouteWithSubRoutes
								key={fallback.key}
								{...fallback}
							/>
						);
					})}
			</Switch>
		</>
	);
};

export { RenderRoutes };

export default RouteWithSubRoutes;

/*{fallback.modal && (
									<Modal
										{...fallback}
										key={fallback.key + "modal"}>
										{fallback.modal()}
									</Modal>
								)}*/
