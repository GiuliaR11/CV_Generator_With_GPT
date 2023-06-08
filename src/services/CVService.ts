import axios from "axios";
import { CV } from "../models/CV";

const API_URL = 'http://localhost:4000/cv'

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

const createCV = async (cv: CV): Promise<any> => {
  try {
    const response = await axios.post(API_URL, cv);
    return response;
  } catch (error) {
    // Handle error
  }
}

export {
  getAllCVs,
  createCV
}