import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import axios from 'axios';
export const AuthContext = createContext(null)


const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const goggleProviderSingIn = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = () => {
        setLoading(true)
        return signInWithPopup(auth, goggleProviderSingIn)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (name, photo, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
            email: email
        })
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged in user inside auth state observe', loggedUser);
            setUser(loggedUser)
            // setLoading(false)

            // jwt
            if (loggedUser) {
                axios.post('https://bistro-boss-server-tan.vercel.app /jwt', { email: loggedUser.email })
                    .then(data => {
                        // console.log(data.data.token)
                        localStorage.setItem('JwtTokenSecret', data.data.token)
                        setLoading(false)
                    })
            }
            else {
            localStorage.removeItem('JwtTokenSecret');
            }

            // setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])



    const authInfo = {
        user, loading, createUser, singIn, logOut, updateUserProfile, googleProvider
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