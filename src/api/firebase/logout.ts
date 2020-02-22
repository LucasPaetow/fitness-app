import { auth } from "./firebaseInit";

export const logoutUser = async () => {
	await auth.signOut();
	return;
};
