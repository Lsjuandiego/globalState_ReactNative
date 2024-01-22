import { createContext } from "react";


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
}


//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

//Componente que es el proveedor del estado 
export const AuthProvider = ({ children }: any) => {
    return (
        <AuthContext.Provider value={{
            authState: authInitialState,
            signIn: () => { }
        }}>
            {children}
        </AuthContext.Provider>
    )


}