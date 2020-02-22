// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Input from "../../components/input";
import Button from "../../components/button";
import { useAuth } from "../../contexts/auth-context";
import { signupUser } from "../../api/firebase";

const Signup = () => {
	const [user, setUser] = useAuth();
	const history = useHistory();
	const [authData, setAuthData] = useState({
		name: "",
		email: "",
		password: ""
	});
	const [sendData, toggleSentData] = useState(false);

	const handleChange = target => event => {
		const newAuthData = { ...authData, [target]: event.target.value };
		setAuthData(newAuthData);
	};

	const handleNameChange = handleChange("name");
	const handleEmailChange = handleChange("email");
	const handlePasswordChange = handleChange("password");

	useEffect(() => {
		if (!sendData) return;
		const authenticate = async () => {
			const user = await signupUser(authData);
			await setUser(user);
			history.go("/create-new-workout", {
				referrer: "/create-new-workout"
			});
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
					hello, <br></br>Signup form
				</Headline>
				<Subline>
					Lets get you started in no time! Just fill in your name,
					email and password and we are good to go. If you already
					have an account <Link to="/auth/login">login here</Link>.
				</Subline>
			</Header>
			<Form onSubmit={handleForm}>
				<Input
					handleChange={handleNameChange}
					value={authData.name}
					type={"text"}
					placeholder={"What are other people calling you"}
					label={"Your name"}
					autofocus={true}
				/>
				<Input
					handleChange={handleEmailChange}
					value={authData.email}
					type={"email"}
					placeholder={"Your awesome E-Mail address"}
					label={"Your E-Mail"}
				/>
				<Input
					handleChange={handlePasswordChange}
					value={authData.password}
					type={"password"}
					placeholder={"Something memorable"}
					label={"Your password"}
				/>
				<Button>Sign up</Button>
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

export default Signup;
