import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user, setUser] = useState(null);
   
    const googleProvider = new GoogleAuthProvider();
    
    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }
    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleSign = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const updateProfileUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(currentUser,"cuser")
            setUser(currentUser);
            setLoading(false)
            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

    const authInfo = {
        createNewUser,
        updateProfileUser,
       login,
        googleSign,
        logout,
        user,
        loading,
    }

   
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;