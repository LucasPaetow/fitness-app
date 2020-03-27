import { auth } from "api/firebase/firebaseInit";

export const logoutUser = async () => {
	await auth.signOut();
	return;
};
