//@ts-nocheck
import React from "react";
import { Modal, Toast } from "../components/notifications";

const NotificationContext = React.createContext([{}, () => {}]);

type Props = {
	children: React.ReactNode;
};

const ProvideNotifications: React.FC<Props> = ({ children }) => {
	const [showNotification, toggleNotification] = React.useState({
		type: "none",
		content: null
	});

	return (
		<NotificationContext.Provider
			value={[showNotification, toggleNotification]}>
			{children}
			{showNotification.type === "modal" && (
				<Modal>{showNotification.content()}</Modal>
			)}
			{showNotification.type === "toast" && (
				<Toast>{showNotification.content()}</Toast>
			)}
		</NotificationContext.Provider>
	);
};

const useNotifications = () => {
	const [showNotification, toggleNotification] = React.useContext(
		NotificationContext
	);
	return [showNotification, toggleNotification];
};

export default ProvideNotifications;
export { useNotifications };
