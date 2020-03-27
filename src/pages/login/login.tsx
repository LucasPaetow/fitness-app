// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
//@ts-ignore
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTextInput } from "components/input";
import Button from "components/button";
import { loginUser } from "api/firebase";
import { useAuthDispatch } from "contexts";

const Login = () => {
	const authDispatch = useAuthDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const referrerExists = location.state?.hasOwnProperty("referrer");
	const navigationTarget = `${
		referrerExists ? location.state.referrer : "/"
	}`;
	const [emailInputState, EmailInput] = useTextInput("");
	const [passwordInputState, PasswordInput] = useTextInput("");
	const [sendData, toggleSentData] = useState(false);

	useEffect(() => {
		if (!sendData) return;
		const authenticate = async () => {
			const user = await loginUser({
				email: emailInputState,
				password: passwordInputState
			});
			await navigate(navigationTarget);
			await authDispatch({ type: "user", payload: user });
		};
		authenticate();
	}, [
		authDispatch,
		emailInputState,
		navigate,
		navigationTarget,
		passwordInputState,
		referrerExists,
		sendData
	]);

	const handleForm = event => {
		event.preventDefault();
		if (
			[emailInputState, passwordInputState].some(
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
					hello, <br></br>login form
				</Headline>
				<Subline>
					Please enter your name and password to login. If you dont
					have an account, you can{" "}
					<Link to="/auth/signup">make one here</Link>.{" "}
				</Subline>
			</Header>
			<Form onSubmit={handleForm}>
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
				<Button>Login</Button>
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

export default Login;
