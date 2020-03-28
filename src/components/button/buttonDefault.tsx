import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
	children: React.ReactNode;
	customOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string | undefined;
}
const Button = (props: ButtonProps) => {
	const { children, customOnClick } = props;
	return customOnClick ? (
		<button
			className={styles.buttonDefault}
			onClick={event => customOnClick(event)}>
			{children}
		</button>
	) : (
		<button className={styles.buttonDefault}>{children}</button>
	);
};

export default Button;
