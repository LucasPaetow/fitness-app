import { auth } from "./firebaseInit";

export const logoutUser = async () => {
	await auth.signOut();
	await console.log("logged out indeed");
	return;
};
