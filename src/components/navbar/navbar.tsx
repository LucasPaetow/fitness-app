//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ routes }) => {
	const singleRoute = ({ name, path }) => (
		<NavbarItem>
			<NavbarLink to={path} activeClassName="selected">
				{name}
			</NavbarLink>
		</NavbarItem>
	);

	const subroutes = routes =>
		routes
			.filter(route => route.showIn === "navbar")
			.map((route, index) => {
				if (route.children) {
					return (
						<React.Fragment key={route.name + index}>
							{singleRoute(route)}
							{subroutes(route.children)}
						</React.Fragment>
					);
				}
				return (
					<React.Fragment key={route.name + index}>
						{singleRoute(route)}
					</React.Fragment>
				);
			});

	return (
		<StyledNavbar>
			<NavbarList>{subroutes(routes)}</NavbarList>
		</StyledNavbar>
	);
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
	position: fixed;
	bottom: 0;
	width: 100%;
	z-index: 5;
	display: grid;
	height: 4rem;
	padding: 1rem;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.5);
	box-shadow: 0 2.1px 18.7px rgba(0, 0, 0, 0.014),
		0 5.9px 34.2px rgba(0, 0, 0, 0.024),
		0 14.2px 49.5px rgba(0, 0, 0, 0.027), 0 47px 114px rgba(0, 0, 0, 0.03);
`;

export default Navbar;
