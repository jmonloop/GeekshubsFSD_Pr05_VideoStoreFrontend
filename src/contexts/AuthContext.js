import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../utils/firestone";
//Importo funciones de autentificación de Firebase
import {
    //Crear usuario
    createUserWithEmailAndPassword,
    //Loguearse
    signInWithEmailAndPassword,
    //Detectar cambios entre login/logout
    onAuthStateChanged,
    //Desloguearse
    signOut
} from 'firebase/auth'


const AuthContext = createContext({

    currentUser: null,
    register: () => Promise,
    login: () => Promise,
    logout: () => Promise,
})


export const useAuth = () => useContext(AuthContext)


export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null)

    //Este useEffect comprueba si ha habido un cambio entre loguearse y desloguearse o viceversa
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            //Si el usuario es null, devuelve null. Si el usuario existe, devuelve el usuario
            setCurrentUser(user)

            return () => {
                unsubscribe()
            }
        })
    }, [])
    //La función register, registra un nuevo usuario en Firestone. 
    //El argumento auth lo coge del fichero de configuración utils/firestone.js
    //Los arg email y pass se los enviamos desde registro
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return signOut(auth)
    }

    //Agrupo todo lo que quiero exportar a otros ficheros mediante el provider
    const value = {
        currentUser,
        register,
        login,
        logout,
    }

    //Le digo que el context cuando haga de proveedor (está englobando todo mi App.js), suministre lo que hay en value a todo lo que tenga dentro
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}