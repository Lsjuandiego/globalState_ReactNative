import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


//Definir cómo luce, qué información tendré aquí
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//Lo usaremos para decirle a react cómo luce y qué expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (name: string) => void;
    logout: () => void;
}


//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Componente que es el proveedor del estado 
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' })
    }

    const logout = () => {
        dispatch({ type: 'logout' })
    }

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: "changeFavIcon", payload: iconName })
    }

    const changeUsername = (name: string) => {
        dispatch({ type: 'changeUsername', payload: name })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            changeFavoriteIcon,
            logout,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    )


}