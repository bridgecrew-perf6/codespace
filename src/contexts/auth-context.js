import {
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useContext, useState, useEffect, createContext } from "react";
import { auth } from "../utility/firebase-service";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const signup = (email, password, fullName) => {
        let promise = new Promise(function (resolve, reject) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((ref) => {
                    updateProfile(ref.user, { displayName: fullName }).then(() => resolve(ref));
                })
                .catch((error) => {
                    reject(error);
                });
        });

        return promise;
    };

    const signin = (email, password) => {
        let promise = new Promise(function (resolve, reject) {
            signInWithEmailAndPassword(auth, email, password)
                .then((ref) => {
                    resolve(ref);
                })
                .catch((error) => {
                    reject(error);
                });
        });

        return promise;
    };

    const signout = () => {
        return auth.signOut();
    };

    const passwordReset = (email) => {
        let promise = new Promise(function (resolve, reject) {
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    resolve(`Password Reset Email sent to ${email}`);
                })
                .catch((error) => {
                    reject(error);
                });
        });

        return promise;
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [currentUser]);

    const value = {
        currentUser,
        signup,
        signin,
        signout,
        passwordReset,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
