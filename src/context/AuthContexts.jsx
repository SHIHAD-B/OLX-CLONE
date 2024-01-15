import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const AuthContexts = createContext();


export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({});
    const [logbutton, setLogbutton] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            unsubscribe();
        }
    }, []);

    const logOut = () => {
        setUser({})
        setLogbutton(false)
        navigate('/')
        return signOut(auth);
    }


    const handleLogin = () => {
        setLogbutton(true)

    };

    return (
        <AuthContexts.Provider value={{ user, setUser, handleLogin, setLogbutton, logbutton, logOut }}>
            {children}
        </AuthContexts.Provider>
    );
}


export default AuthContexts