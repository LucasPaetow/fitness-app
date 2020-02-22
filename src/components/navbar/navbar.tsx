//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ routes }: RouteProps) => {
	const singleRoute = ({ key, path, status, exact }: NestedRouteProps) =>
		status === "default" && (
			<NavbarItem key={key}>
				<NavbarLink exact={exact} to={path} activeClassName="selected">
					{key}
				</NavbarLink>
			</NavbarItem>
		);

	const subroutes = (routes: RouteProps) => (
		<>
			{routes.map((route: RouteProps): any => {
				if (route.routes) {
					return (
						<React.Fragment key={route.key}>
							{/*singleRoute(route)*/}
							{subroutes(route.routes)}
						</React.Fragment>
					);
				}
				return singleRoute(route);
			})}
		</>
	);

	return (
		<StyledNavbar>
			<NavbarList>{subroutes(routes)}</NavbarList>
		</StyledNavbar>
	);
};

type RouteProps = {
	routes?: any;
	path?: string;
	key?: string;
	exact?: boolean;
	component?: React.FC;
	map?: any;
};

type NestedRouteProps = {
	path: string;
	key: string;
	exact: boolean;
	component: React.FC;
};

const NavbarLink = styled(NavLink)`
	text-decoration: none;

	&.selected {
		color: salmon;
	}
`;

const NavbarItem = styled.li`
	font-weight: bold;
`;

const NavbarList = styled.ul`
	align-self: center;
	display: grid;
	grid-auto-flow: column;
	grid-template-columns: 1fr;
	grid-auto-columns: min-content;
	grid-column-gap: 1rem;
`;

const StyledNavbar = styled.nav`
	display: grid;
	height: 4rem;
	padding: 1rem;
	background-color: hsla(0, 0%, 0%, 0);
	box-shadow: 0 2.1px 18.7px rgba(0, 0, 0, 0.014),
		0 5.9px 34.2px rgba(0, 0, 0, 0.024),
		0 14.2px 49.5px rgba(0, 0, 0, 0.027), 0 47px 114px rgba(0, 0, 0, 0.03);
`;

export default Navbar;
