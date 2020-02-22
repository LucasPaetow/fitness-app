//@ts-ignore
import React, { useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { useNotifications } from "../../contexts";

export interface PortalProps {
	target: Element;
	children: React.ReactNode;
}

const Modal: React.FC<PortalProps> = props => {
	const [showNotification, toggleNotification] = useNotifications();
	const { children } = props;

	const content = showNotification && (
		<Overlay>
			<ModalBase>
				<ModalClose
					type="button"
					onClick={() =>
						//@ts-ignore
						toggleNotification({ type: "none", content: null })
					}>
					X
				</ModalClose>
				<ModalBody>{children}</ModalBody>
			</ModalBase>
		</Overlay>
	);

	return createPortal(<div>{content}</div>, document.body);
};

export default Modal;

const Overlay = styled.div`
	z-index: 98;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 1);
`;

const ModalBase = styled.div`
	z-index: 99;
	/* Everything below is optional styling */
	position: relative;
	width: 100%;
	max-width: 320px;
	max-height: 100%;
	margin: 0 auto;
`;

const ModalClose = styled.button`
	position: absolute;
	top: -24px;
	right: 0;
	padding: 5px;
	border: 0;
	-webkit-appearance: none;
	background: none;
	color: white;
	cursor: pointer;
`;

const ModalBody = styled.div`
	position: absolute;
	padding: 20px 24px;
	border-radius: 4px;
	background-color: white;
`;
