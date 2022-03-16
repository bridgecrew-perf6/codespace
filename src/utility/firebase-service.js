import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAG3WbbnTHasBZiJvgzLR6wdaRdsT9PbkY",
    authDomain: "code-space-3499f.firebaseapp.com",
    projectId: "code-space-3499f",
    storageBucket: "code-space-3499f.appspot.com",
    messagingSenderId: "502557415158",
    appId: "1:502557415158:web:dba8f72254f7bb6970bed7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth() ;
export const db = getFirestore();
export default app ;