//@ts-nocheck

import React from "react";
import styled from "styled-components";
import { NavLink, Link, useLocation } from "react-router-dom";
import Hamburger from "components/navbar/hamburger";

export const NavbarUnauthenticated = () => {
	const [activeNav, setActiveNav] = React.useState(false);
	const location = useLocation();
	const handleClick = () => setActiveNav(!activeNav);

	const beautfiyLocation = () => {
		let current = location.pathname;

		if (current === "/") {
			return "Home";
		}

		return current
			.split("/")[1]
			.split("-")
			.join(" ");
	};

	return (
		<Navbar>
			<VisibleNavbar>
				<HomeLink to="/">
					<BrandIcon></BrandIcon>
					<BrandHeadline>Brand</BrandHeadline>
				</HomeLink>
				<CurrentLocation onClick={handleClick} active={activeNav}>
					<LocationText>{beautfiyLocation()}</LocationText>
					<Hamburger hamburgerState={activeNav}></Hamburger>
				</CurrentLocation>
			</VisibleNavbar>
			{activeNav && (
				<ExtendedNavbar onClick={handleClick}>
					<NavbarLinks>
						<NavbarLink to="/" activeClassName="selected">
							<NavIcon></NavIcon>
							Home
						</NavbarLink>
						<NavbarLink to="/login" activeClassName="selected">
							<NavIcon></NavIcon>
							Login
						</NavbarLink>
						<NavbarLink to="/signup" activeClassName="selected">
							<NavIcon></NavIcon>
							Signup
						</NavbarLink>
					</NavbarLinks>
				</ExtendedNavbar>
			)}
		</Navbar>
	);
};

const Navbar = styled.nav`
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 15;
`;

const VisibleNavbar = styled.section`
	display: grid;
	grid-template-columns: min-content 1fr;
	grid-column-gap: 1rem;
	align-items: center;
	height: 4rem;
	padding: 1rem;
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.25);
	box-shadow: 0 2.1px 18.7px rgba(0, 0, 0, 0.014),
		0 5.9px 34.2px rgba(0, 0, 0, 0.024),
		0 14.2px 49.5px rgba(0, 0, 0, 0.027), 0 47px 114px rgba(0, 0, 0, 0.03);
`;

const HomeLink = styled(Link)`
	text-decoration: none;
	grid-column: 1/2;
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 0.5rem;
	grid-auto-columns: min-content;
`;

const BrandIcon = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	background-color: hsla(0, 0%, 9%, 1);
	content: " ";
	border-radius: 50%;
`;

const BrandHeadline = styled.h4`
	color: hsla(0, 0%, 9%, 1);
	font-size: 1rem;
`;

const CurrentLocation = styled.div`
	grid-column: 2/3;
	width: max-content;
	justify-self: end;
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 0.5rem;
	align-items: center;
	padding: 0.25rem 0.5rem 0.25rem 1rem;
	border-radius: 0.5rem;
	border: 1px solid ${props => (props.active ? "lightgrey" : "transparent")};
`;

const LocationText = styled.p`
	font-weight: bold;
`;

const ExtendedNavbar = styled.section`
	display: grid;
	padding: 0.5rem 1rem;
	width: 100%;
	height: calc(100vh - 4rem);
	background-color: hsla(0, 0%, 0%, 0.5);
`;

const NavbarLinks = styled.div`
	background-color: grey;
	width: 100%;
	justify-self: end;
	border-radius: 0.5rem;
	border: 1px solid darkgrey;
	height: min-content;
`;

const NavbarLink = styled(NavLink)`
	text-decoration: none;
	padding: 1rem 1.5rem;
	display: grid;
	grid-auto-flow: column;
	grid-column-gap: 0.5rem;
	justify-content: start;
	border-bottom: 1px solid darkgrey;
	&.selected {
		color: salmon;
		font-weight: bold;
	}
	&:last-of-type {
		border-bottom: 1px solid transparent;
	}
`;

const NavIcon = styled.div`
	height: 1.5rem;
	width: 1.5rem;
	background-color: hsla(0, 0%, 9%, 1);
	content: " ";
	border-radius: 50%;
`;

const NavbarLinkText = styled.p`
	color: hsla(0, 0%, 9%, 1);
	font-size: 1rem;
`;
