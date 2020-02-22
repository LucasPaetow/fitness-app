// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { loginUser } from "../../api/firebase";
import { useAuth } from "../../contexts/auth-context";

const Login = () => {
	const [user, setUser] = useAuth();
	const history = useHistory();
	const [authData, setAuthData] = useState({ email: "", password: "" });
	const [sendData, toggleSentData] = useState(false);

	const handleChange = target => event => {
		const newAuthData = { ...authData, [target]: event.target.value };
		setAuthData(newAuthData);
	};

	const handleNameChange = handleChange("email");
	const handlePasswordChange = handleChange("password");

	useEffect(() => {
		if (!sendData) return;
		const authenticate = async () => {
			const user = await loginUser(authData);
			await history.go("/");
			await setUser(user);
		};
		authenticate();
	}, [authData, history, sendData, setUser]);

	const handleForm = event => {
		event.preventDefault();
		if (Object.values(authData).some(element => element === "")) {
			throw new Error("at least one value is missing");
		}
		toggleSentData(true);

		return;
	};

	return (
		<Layout>
			<Header>
				<Headline>
					hello, <br></br>login form
				</Headline>
				<Subline>
					Please enter your name and password to login. If you dont
					have an account, you can{" "}
					<Link to="/auth/signup">make one here</Link>.{" "}
				</Subline>
			</Header>
			<Form onSubmit={handleForm}>
				<Input
					handleChange={handleNameChange}
					value={authData.email}
					type={"text"}
					placeholder={"What are other people calling you"}
					label={"Your name"}
				/>
				<Input
					handleChange={handlePasswordChange}
					value={authData.password}
					type={"password"}
					placeholder={"Something memorable"}
					label={"Your password"}
				/>
				<Button>Login</Button>
			</Form>
		</Layout>
	);
};

const Layout = styled.section`
	height: calc(100vh - 4rem);
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-template-rows: 5rem;
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;

	&:before {
		content: "";
		grid-column: 1/4;
	}
`;

const Header = styled.header`
	grid-column: 2/3;
`;

const Headline = styled.h1`
	font-size: 3rem;
	line-height: 100%;
`;

const Subline = styled.p`
	padding-top: 1rem;
`;

const Form = styled.form`
	grid-column: 2/3;
	width: 100%;
	display: grid;
	grid-row-gap: 1.5rem;
	grid-auto-flow: row;
`;

export default Login;
