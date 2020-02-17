import { auth } from "./firebaseInit";

interface AuthData {
	name?: string;
	email: string;
	password: string;
}

export const loginUser = async (authData: AuthData) => {
	const { email, password } = { ...authData };
	await auth.signInWithEmailAndPassword(email, password);
	return auth.currentUser;
};
