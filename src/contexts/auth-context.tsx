import React from "react";

const AuthContext = React.createContext([{}, () => {}]);

type Props = {
	children: React.ReactNode;
};

const ProvideAuth: React.FC<Props> = ({ children }) => {
	const [user, setUser] = React.useState({});
	return (
		<AuthContext.Provider value={[user, setUser]}>
			{children}
		</AuthContext.Provider>
	);
};

const useAuth = () => {
	const [user, setUser] = React.useContext(AuthContext);
	return [user, setUser];
};

export default ProvideAuth;
export { useAuth };
