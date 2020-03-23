import React, { useEffect } from "react";

import {
	//@ts-ignore
	Navigate,
	useLocation,
	//@ts-ignore
	useNavigate,
	//@ts-ignore
	useResolvedLocation
} from "react-router-dom";
import { useToastDispatch } from "../contexts";

type RedirectProps = {
	to: string;
	record: string;
};

const RedirectComponent: React.FC<RedirectProps> = ({ to, record }) => {
	const location = useLocation();
	const toastDispatch = useToastDispatch();
	let referrerExists = location.state?.hasOwnProperty("referrer");
	console.log("location", location);

	useEffect(() => {
		//@ts-ignore
		notificationDispatch({
			type: "toast",
			payload: {
				content: (
					<p>
						You are beeing redirected to {to} in order to
						authenticate
					</p>
				),
				position: "center center"
			}
		});
	}, [toastDispatch, record, to]);

	return record === "navigate" ? (
		<Navigate to={`${to}`} state={{ referrer: location.pathname }} />
	) : (
		<Navigate
			//@ts-ignore
			to={`${referrerExists ? location.state.referrer : to}`}
		/>
	);
};

export default RedirectComponent;
