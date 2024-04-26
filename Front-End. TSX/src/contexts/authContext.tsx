import Toast from "@/components/toast";
import { LoginData, UserData } from "@/schemas/user.schema";
import api from "@/services/api";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { ReactNode, createContext, useContext, useState } from "react";

interface Props {
    children: ReactNode
}

interface AuthProviderData {
    register: (userData: UserData) => void
    login: (loginData: LoginData) => void
}

const AuthContext = createContext({})
// const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)


export const AuthProvider = ({ children }: Props) => {

    const router = useRouter()

    const register = (userData: UserData) => {
        api.post("/users", userData)
            .then(() => {
                Toast({ message: "Cadastro efetuado", isSuccess: true })
                router.push("/login")
            }).catch((error) => {
                Toast({ message: "Erro no cadastro" })
            })
    }

    const login = (loginData: LoginData) => {
        api.post("/login", loginData)
            .then((response) => {
                setCookie("kenzify.token", response.data.token, { maxAge: 60 * 30 })
            }).
            then(() => {
                Toast({ message: "Login efetuado", isSuccess: true })
                router.push("/")

            }).catch((error) => {
                Toast({ message: "Erro no login, verifique seu email e/ou senha" })
            })
    }

    return (
        <AuthContext.Provider value={{ register, login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)



  // const [publish, setPublish] = useState([]);

    // const getPublish = async () => {
    //     try {
    //         const { data } = await api.get('/publish');
    //         setPublish(data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // useEffect(() => {
    //     (async () => {
    //         await getPublish()
    //     })()
    // }, []);