import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo, email) => {
        return updateProfile (auth.currentUser, {
            displayName: name,
            photoURL: photo,
            email: email
        })
    }




useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
        console.log('logged in user inside auth state observe', loggedUser);
        setUser(loggedUser)
        setLoading(false)
    })
    return () => {
        unsubscribe()
    }

}, [])



    const authInfo = {
        user, loading, createUser,singIn ,logOut,updateUserProfile
    }
    return (
        <>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

export default AuthProvider;