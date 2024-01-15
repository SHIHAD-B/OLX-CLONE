import { GoogleLoginButton } from "react-social-login-buttons";
import { useContext } from "react";
import AuthContexts from "../context/AuthContexts";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { serverTimestamp } from "firebase/firestore";

export const Login = () => {
    const { setUser, setLogbutton } = useContext(AuthContexts)



    const googleSignup = async () => {

        const googleProvider = provider

        const res = await signInWithPopup(auth, googleProvider);
        setLogbutton(false)
        console.log(res);
        setUser(res.user)
    }

    return (
        <div>
            <GoogleLoginButton onClick={googleSignup} />
        </div>
    );
};
