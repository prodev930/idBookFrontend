import axios from 'axios';

const useUser = () => {
 
 const signUp = (data) => async(dispatch) => {
        const response = await axios.post("https://backend.idbookhotels.com/api/v1/auth/signup",data)
          console.log("response", response)
    
    }
    return { signUp }
}

export default useUser