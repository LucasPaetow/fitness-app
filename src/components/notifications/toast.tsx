import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useToastDispatch } from "../../contexts";

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
		<ToastBase onClick={() => toastDispatch({ type: "close" })}>
			<ToastDurationBar>
				<ToastDuration timer={timerProgress} />
			</ToastDurationBar>
			<ToastBody>{children}</ToastBody>
		</ToastBase>
	);

	return createPortal(<div>{content}</div>, document.body);
};

const ToastBase = styled.div`
	z-index: 99;
	position: absolute;
	right: 0;
	bottom: 0;
	left: 0;
	display: grid;
`;

const ToastDurationBar = styled.div`
	position: relative;
	width: 100%;
`;
const ToastDuration = styled.div<TimerProps>`
	width: 100%;
	background-color: red;
	height: 3px;
	transform: scaleX(${props => props.timer});
	transform-origin: left;
	transition: transform 1s linear;
`;

const ToastBody = styled.div`
	padding: 20px 24px;
	border-radius: 4px;
	background-color: white;
	justify-self: center;
	align-self: center;
`;
