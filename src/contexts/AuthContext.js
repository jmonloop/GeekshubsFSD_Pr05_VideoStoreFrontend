import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firestone";
import {createUserWithEmailAndPassword} from 'firebase/auth'
const AuthContext = createContext({

    currentUser: null,
    register: ()=> Promise
})


export const useAuth = () => useContext(AuthContext)


export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    //La función register, registra un nuevo usuario en Firestone. 
    //El argumento auth lo coge del fichero de configuración utils/firestone.js
    //Los arg email y pass se los enviamos desde registro
    const register = (email, password) =>{
        return createUserWithEmailAndPassword (auth, email, password)
    }


    const value = {
        currentUser,
register
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}