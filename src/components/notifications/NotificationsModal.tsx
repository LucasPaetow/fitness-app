import React from "react";
import { createPortal } from "react-dom";
import { useModalDispatch } from "contexts";
import styles from "./Notifications.module.css";

export interface ModalProps {
	position: string;
	children: React.ReactNode;
}

interface ModalBodyProps {
	positionX: "center" | "end" | "start";
	positionY: "center" | "end" | "start";
}

export const Modal: React.FC<ModalProps> = props => {
	const modalDispatch = useModalDispatch();
	const { children, position } = props;

	const translatePositions = () => {
		//right/left/center top/bottom/center
		let positionArray = position.split(" ");
		let xPostitionEnum = {
			center: "center",
			right: "end",
			left: "start"
		};
		let yPostitionEnum = {
			center: "center",
			top: "start",
			bottom: "end"
		};
		return {
			x: xPostitionEnum[positionArray[0]],
			y: yPostitionEnum[positionArray[1]]
		};
	};

	const modalStyle = {
		justifySelf: translatePositions().x,
		alignSelf: translatePositions().y
	};

	const content = (
		<div className={styles.modalContainer}>
			<aside
				className={styles.modalBackground}
				onClick={() => modalDispatch({ type: "close" })}
			/>
			<div className={styles.modalBase} style={modalStyle}>
				<div className={styles.modalBody}>{children}</div>
			</div>
		</div>
	);

	return createPortal(<div>{content}</div>, document.body);
};
