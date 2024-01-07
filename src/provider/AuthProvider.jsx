import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user, setUser] = useState(null);
    const axiosPublic=useAxiosPublic()
   
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
            setUser(currentUser);
            console.log(currentUser,"currentuser")
           
            if (currentUser) {
                
                const userInformation = { email: currentUser.email };
                axiosPublic.post('/jwt', userInformation)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })
            }
            else {
                
                localStorage.removeItem('access-token');
                setLoading(false);
            }
           
        });
        return () => {
            return unsubscribe();
        }
    }, [axiosPublic])


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