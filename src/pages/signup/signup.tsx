// @ts-nocheck
import React, { useState, useEffect } from "react";
//@ts-ignore
import { Link, useNavigate } from "react-router-dom";
import { useTextInput } from "components/input";
import Button from "components/button";
import { useAuthDispatch } from "contexts";
import { signupUser } from "api/firebase";
import styles from "./Signup.module.css";

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
		<article className={styles.signupLayout}>
			<header className={styles.signupHeader}>
				<h1 className={styles.signupHeadline}>
					hello, <br></br>Signup form
				</h1>
				<p className={styles.signupSubline}>
					Lets get you started in no time! Just fill in your name,
					email and password and we are good to go. If you already
					have an account <Link to="/auth/login">login here</Link>.
				</p>
			</header>
			<form className={styles.signupForm} onSubmit={handleForm}>
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
			</form>
		</article>
	);
};

export default Signup;
