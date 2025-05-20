import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    const createUser = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser =  (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth,email,password);
    };


    const updateUser = (updateData) =>{
        return updateProfile(auth.currentUser, updateData);
    }


    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false);
        });
        return ()=> unSubscribe();
    },[])

    const authData = {
        googleLogin,
        createUser,
        loginUser,
        updateUser,
        user,
        setUser,
        loader,
        setLoader,
    };
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;