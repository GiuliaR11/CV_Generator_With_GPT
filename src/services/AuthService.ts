import axios from "axios";
import { UserDto } from "../models/User";

const API_URL = 'http://localhost:4000/auth'

const signIn = async (user: UserDto) => {
  try {
    console.log(user)
    const response = await axios.post(`${API_URL}/signIn`, {
      email: user.email,
      password: user.password
    });
    console.log(response.data)
    return response.data
  } catch (error) {
    return {
      statusCode: 401,
    }
  }
}

export {
  signIn
}