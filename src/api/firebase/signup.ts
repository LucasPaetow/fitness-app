import { auth } from "api/firebase/firebaseInit";

interface AuthData {
	name?: string;
	email: string;
	password: string;
}

export const signupUser = async (
	authData: AuthData
): Promise<firebase.User | null> => {
	const { name, email, password } = { ...authData };
	await auth.createUserWithEmailAndPassword(email, password);
	await auth.currentUser?.sendEmailVerification();
	await auth.currentUser?.updateProfile({ displayName: name });
	return auth.currentUser;
};
