import axios from "axios";
import { CV } from "../models/CV";
import { LocalStorageKeys } from "../constants";

const API_URL = 'http://localhost:4000/cv'
const token = localStorage.getItem(LocalStorageKeys.authorization)

const getAllCVs = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    console.log(data)
    return data
    // Process the data or update your component state
  } catch (error) {
    // Handle error
  }
}

const createCV = async (cv: CV, userId: string): Promise<any> => {
  try {
    const response = await axios.post(API_URL,
      {
        ...cv, 
        user: {
          id: userId
        }
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response;
  } catch (error) {
    // Handle error
  }
}

const getCVById = async (id: string): Promise<CV | null> => {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        authorization: token,
      }
    });
    const data = response.data;
    return data
  } catch (error) {
    // Handle error
    return null
  }
}
export {
  getAllCVs,
  createCV,
  getCVById
}