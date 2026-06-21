import {useContext} from "react"
import {AuthContext} from "../auth.context.jsx"
import {login, register,logout,getme} from "../services/auth.api.js"

export const useAuth=()=>{
    const context = useContext(AuthContext)
    const {user, setUser, loading, setLoading} = context

    const handleLogin = async ({ email, password }) => {
    setLoading(true);

    try {
        const data = await login({ email, password });

        console.log("Login Response:", data);
        console.log("Message:", data.message);

        setUser(data.user);

        return true;
    } catch (error) {
        console.error("Login failed:", error);
        return false;
    } finally {
        setLoading(false);
    }
};
   const handleRegister = async ({ name, email, password }) => {
    setLoading(true);

    try {
        const data = await register({
            name,
            email,
            password,
        });

        setUser(data.user);
        return true;
    } catch (error) {
        console.error("Registration failed:", error);
        return false;
    } finally {
        setLoading(false);
    }
};

    const handleLogout = async () => {
        setLoading(true)
        await logout()
        setUser(null)
        setLoading(false)
    }

    const fetchCurrentUser = async () => {
        setLoading(true)
        const data=await getme()
        setUser(data.user)
        setLoading(false)
    }

    return {user,loading,handleLogin,handleRegister,handleLogout,fetchCurrentUser}
}

