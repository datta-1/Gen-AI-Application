import axios from "axios";


/*This function has about the register api call*/
export async function register({name,email,password}){
    try {
        const response = await axios.post("/api/auth/register", {
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
export async function login({email,password}){
    try {
        const response = await axios.post("/api/auth/login", {
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

/*This function has about the logout api call*/
export async function logout(){
    try {
        const response = await axios.post("/api/auth/logout",{
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
        const response = await axios.get("/api/auth/me", {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
