import axios from "axios";
import { CreateUserDto, LogInUserDto } from "../models/User";
import { LocalStorageKeys } from "../constants";

const API_URL = 'http://localhost:4000/auth'

const signIn = async (user: LogInUserDto) => {
  try {
    const {headers} = await axios.post(`${API_URL}/signIn`, user, {timeout: 5000});
    localStorage.setItem(LocalStorageKeys.authorization, `Bearer ${headers.authorization}`);
    return true;

  } catch (error) {
    console.error(error);
    return false;
  }
}

const getProfile: (authorization: string) => Promise<CreateUserDto | null> = async (authorization) => {
  try {
    const {data} = await axios.get(`${API_URL}/profile`, {
      headers: {
        authorization,
      }
    });

    return data as CreateUserDto;
  } catch (error) {
    console.error(error);
    return null
  }
}

export {
  signIn,
  getProfile,
}