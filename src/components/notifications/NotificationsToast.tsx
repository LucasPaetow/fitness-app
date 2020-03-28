import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useToastDispatch } from "contexts";
import styles from "./Notifications.module.css";

export interface ToastProps {
	position: string;
	children: React.ReactNode;
	timerDuration?: number;
}
interface TimerProps {
	readonly timer: number;
}

export const Toast: React.FC<ToastProps> = props => {
	const toastDispatch = useToastDispatch();
	const [timer, setTimer] = useState<number>(0);
	const { children, timerDuration = 5 } = props;
	const timerProgress = 1 - timer / timerDuration;

	useEffect(() => {
		if (timer === timerDuration + 1) {
			toastDispatch({ type: "close" });
		}

		const id = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);
		return () => clearInterval(id);
	}, [toastDispatch, timer, timerDuration]);

	const content = (
		<div
			className={styles.toastBase}
			onClick={() => toastDispatch({ type: "close" })}>
			<div className={styles.toastDurationBar}>
				<div
					className={styles.toastDurationBar}
					style={{ transform: `scaleX(${timerProgress})` }}
				/>
			</div>
			<div className={styles.toastBody}>{children}</div>
		</div>
	);

	return createPortal(<div>{content}</div>, document.body);
};
