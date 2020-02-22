//@ts-nocheck
import React from "react";
import Modal from "../components/modal";

const NotificationContext = React.createContext([{}, () => {}]);

type Props = {
	children: React.ReactNode;
};

const ProvideNotifications: React.FC<Props> = ({ children }) => {
	const [showNotification, toggleNotification] = React.useState({
		type: "none",
		content: null
	});
	console.log(showNotification, toggleNotification);
	return (
		<NotificationContext.Provider
			value={[showNotification, toggleNotification]}>
			{children}
			//@ts-ignore
			{showNotification.type === "modal" && (
				<Modal>{showNotification.content()}</Modal>
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
