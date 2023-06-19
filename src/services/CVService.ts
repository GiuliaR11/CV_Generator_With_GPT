import axios from "axios";
import { CV } from "../models/CV";
import { LocalStorageKeys } from "../constants";

const API_URL = 'http://localhost:4000/cv'
const token = localStorage.getItem(LocalStorageKeys.authorization)

const getAllCVs = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    return data
  } catch (error) {
  }
}

const deleteCV = async (id: string): Promise<any> => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`,{
      headers: {
        authorization: token,
      }
    })
    if (response)
      return true
  } catch (error) {
    return false
  }
}

const createCV = async (cv: CV, userId: string): Promise<any> => {
  try {
    const response = await axios.post(API_URL,
      {
        ...cv, 
        personalDetails: {
          city: cv.personalDetails.city,
          wantedJobTitle: cv.personalDetails.wantedJobTitle,
          professionalSummary: cv.personalDetails.professionalSummary,
          firstName: cv.personalDetails.firstName,
          lastName: cv.personalDetails.lastName,
          email: cv.personalDetails.email,
          phone: cv.personalDetails.phone,
          country: cv.personalDetails.country,
        },
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
    return null
  }
}
export {
  getAllCVs,
  createCV,
  getCVById,
  deleteCV
}