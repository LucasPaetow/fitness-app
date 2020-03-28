// @ts-nocheck
import React, { useState, useEffect } from "react";
//@ts-ignore
import { useNavigate, Link, useLocation } from "react-router-dom";
import { useTextInput } from "components/input";
import Button from "components/button";
import { loginUser } from "api/firebase";
import { useAuthDispatch } from "contexts";
import styles from "./Login.module.css";

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
		<article className={styles.loginLayout}>
			<header className={styles.loginHeader}>
				<h1 className={styles.loginHeadline}>
					hello, <br></br>login form
				</h1>
				<p className={styles.loginSubline}>
					Please enter your name and password to login. If you dont
					have an account, you can{" "}
					<Link to="/auth/signup">make one here</Link>.{" "}
				</p>
			</header>
			<form className={styles.loginForm} onSubmit={handleForm}>
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
			</form>
		</article>
	);
};

export default Login;
