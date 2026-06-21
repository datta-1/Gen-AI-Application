import axios from "axios";


/*This function has about the register api call*/
export async function register({name,email,password}){
    try {
        const response = await axios.post("http://localhost:3000/api/auth/login", {
            username: name,
            email,
            password
        },{
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }   
}

/*This function has about the login api call*/
export async function login({ email, password }) {
    try {
        const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            {
                email,
                password,
            },
            {
                withCredentials: true,
            }
        );

        return response.data;
    } catch (error) {
        console.log("Backend Error:", error.response?.data);
        throw error;
    }
}
/*This function has about the logout api call*/
export async function logout(){
    try {
        const response = await axios.post("http://localhost:3000/api/auth/logout",{
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

/**get current user details */
export async function getme(){
    try {
        const response = await axios.get("http://localhost:3000/api/auth/me", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
