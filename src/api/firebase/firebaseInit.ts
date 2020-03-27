import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "api/firebase/firebaseConfigs";

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
