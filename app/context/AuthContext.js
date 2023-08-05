"use client"

import { createContext, useState, useEffect, useContext } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth'
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        return () => unsubscribe()
    }, [user])

    return (
        <AuthContext.Provider value={{
            user,
            signInWithGoogle,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}