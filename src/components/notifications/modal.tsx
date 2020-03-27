import React from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useModalDispatch } from "contexts";

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
	const { x, y } = translatePositions();

	const content = (
		<ModalContainer>
			<ModalBackground onClick={() => modalDispatch({ type: "close" })} />
			<ModalBase positionX={x} positionY={y}>
				<ModalBody>{children}</ModalBody>
			</ModalBase>
		</ModalContainer>
	);

	return createPortal(<div>{content}</div>, document.body);
};

const ModalContainer = styled.div`
	z-index: 98;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: grid;
	height: 100vh;
	width: 100vw;
`;

const ModalBackground = styled.aside`
	grid-column: 1/2;
	grid-row: 1/2;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 99;
`;

const ModalBase = styled.div<ModalBodyProps>`
	grid-column: 1/2;
	grid-row: 1/2;
	justify-self: ${props => props.positionX};
	align-self: ${props => props.positionY};
	z-index: 100;
`;

const ModalBody = styled.div`
	display: grid;
	padding: 1rem;
`;
