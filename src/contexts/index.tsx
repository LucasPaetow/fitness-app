import React from "react";
import ProvideAuthContext from "./auth-context";
import ProvideModalContext from "./notification-modal-context";
import ProvideToastContext from "./notification-toast-context";

interface Props {
	children: React.ReactNode;
}

const AppContext = ({ children }: Props) => {
	return (
		<ProvideToastContext>
			<ProvideModalContext>
				<ProvideAuthContext>{children}</ProvideAuthContext>
			</ProvideModalContext>
		</ProvideToastContext>
	);
};

export default AppContext;
export * from "./auth-context";
export * from "./notification-modal-context";
export * from "./notification-toast-context";
