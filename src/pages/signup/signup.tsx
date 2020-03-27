// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//@ts-ignore
import { Link, useNavigate } from "react-router-dom";
import { useTextInput } from "components/input";
import Button from "components/button";
import { useAuthDispatch } from "contexts";
import { signupUser } from "api/firebase";

const Signup = () => {
	const [nameInputState, NameInput] = useTextInput("");
	const [emailInputState, EmailInput] = useTextInput("");
	const [passwordInputState, PasswordInput] = useTextInput("");
	const authDispatch = useAuthDispatch();
	const navigate = useNavigate();
	const [sendData, toggleSentData] = useState(false);

	useEffect(() => {
		if (!sendData) return;
		const authenticate = async () => {
			const user = await signupUser({
				name: nameInputState,
				email: emailInputState,
				password: passwordInputState
			});
			await authDispatch({
				type: "user",
				payload: user
			});
			navigate("/");
		};
		authenticate();
	}, [
		authDispatch,
		emailInputState,
		nameInputState,
		navigate,
		passwordInputState,
		sendData
	]);

	const handleForm = event => {
		event.preventDefault();
		if (
			[nameInputState, emailInputState, passwordInputState].some(
				element => element === ""
			)
		) {
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
				<NameInput
					type={"text"}
					placeholder={"What are other people calling you"}
					label={"Your name"}
					autofocus={true}
				/>
				<EmailInput
					type={"email"}
					placeholder={"Your awesome E-Mail address"}
					label={"Your E-Mail"}
				/>
				<PasswordInput
					type={"password"}
					placeholder={"Something memorable"}
					label={"Your password"}
				/>
				<Button>Sign up</Button>
			</Form>
		</Layout>
	);
};

const Layout = styled.article`
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
