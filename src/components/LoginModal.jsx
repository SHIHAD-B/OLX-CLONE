import { useContext } from "react"
import { Login } from "./Login"
import AuthContexts from "../context/AuthContexts"


export const LoginModal = () => {
    const { setLogbutton } = useContext(AuthContexts)
    return (
        <>
            <div className="absolute h-[300px] w-full flex justify-center items-center">
                <Login setLogbutton={setLogbutton} />
            </div>
        </>
    )
}