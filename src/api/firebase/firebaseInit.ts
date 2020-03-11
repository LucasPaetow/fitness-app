import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfigs from "./firebaseConfigs";

firebase.initializeApp(firebaseConfigs);

export const auth = firebase.auth();

export default firebase;
