//@ts-nocheck
import React from "react";
import styles from "./Layout.module.css";

export const FormLayout = ({ children }) => {
	console.log("decider", children);
	return (
		<form className={styles.layoutFormForm}>
			{React.Children.map(children, child => {
				if (child.props.children) {
					return DualFormRow(child.props);
				}

				return SingularFormRow(child);
			})}
		</form>
	);
};

const SingularFormRow = input => {
	return <div className={styles.layoutFormSingleRow}>{input}</div>;
};

const DualFormRow = ({ children }) => {
	return (
		<span className={styles.layoutFormDualRows}>
			{React.Children.map(children, child => (
				<div className={styles.layoutFormDualRow}>{child}</div>
			))}
		</span>
	);
};
