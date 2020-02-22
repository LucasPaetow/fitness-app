import React from "react";
import ProvideAuth from "./auth-context";
import ProvideNotifications from "./notification-context";

interface Props {
	children: React.ReactNode;
}

const AppContext = ({ children }: Props) => {
	return (
		<ProvideNotifications>
			<ProvideAuth>{children}</ProvideAuth>
		</ProvideNotifications>
	);
};

export default AppContext;
export * from "./auth-context";
export * from "./notification-context";
