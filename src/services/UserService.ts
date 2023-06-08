import axios from "axios";
import { CreateUserDto } from "../models/User";

const API_URL = 'http://localhost:4000/users'

const getAllUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    console.log(data)
    // Process the data or update your component state
  } catch (error) {
    // Handle error
  }
}

const createUser = async (user: CreateUserDto) => {
  try {
    const response = await axios.post(API_URL, {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      password: user?.password
    });
    console.log('User created:', response.data);
  } catch (error) {
    // Handle error
  }
}

export {
  getAllUsers,
  createUser
}