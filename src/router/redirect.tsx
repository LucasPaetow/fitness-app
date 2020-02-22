import React, { useEffect } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { useNotifications } from "../contexts";
import Modal from "../components/modal";

type RedirectProps = {
	to: string;
	record: string;
};

const RedirectComponent: React.FC<RedirectProps> = ({ to, record }) => {
	const location = useLocation();
	const history = useHistory();
	const [setNotifications, toggleNotifications] = useNotifications();
	let referrerExists = history.location.state?.hasOwnProperty("referrer");

	useEffect(() => {
		//@ts-ignore
		toggleNotifications({
			type: "modal",
			content: () => {
				return <h1>hello</h1>;
			}
		});
	}, [record, toggleNotifications]);

	return record === "history" ? (
		<>
			<Redirect
				exact
				from={"/:anysite"}
				to={{
					pathname: `${to}`,
					state: { referrer: location.pathname }
				}}
			/>
		</>
	) : (
		<Redirect
			exact
			//@ts-ignore
			to={`${referrerExists ? history.location.state.referrer : to}`}
		/>
	);
};

export default RedirectComponent;
