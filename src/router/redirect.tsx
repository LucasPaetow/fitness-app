import React, { useEffect } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { useNotificationDispatch } from "../contexts";

type RedirectProps = {
	to: string;
	record: string;
};

const RedirectComponent: React.FC<RedirectProps> = ({ to, record }) => {
	const location = useLocation();
	const history = useHistory();
	const notificationDispatch = useNotificationDispatch();
	let referrerExists = history.location.state?.hasOwnProperty("referrer");

	console.log(to, record, history);

	useEffect(() => {
		//@ts-ignore
		notificationDispatch({
			type: "toast",
			payload: (
				<p>
					You are beeing redirected to {to} in order to authenticate
				</p>
			)
		});
	}, [notificationDispatch, record, to]);

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
