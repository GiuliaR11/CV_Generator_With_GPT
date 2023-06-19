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

const createCV = async (cv: CV): Promise<any> => {
  try {
    const cvSample = {
      "name": "My second CV",
      "templateName": "Sydney",
      "templateColor": "#827A72",
      "personalDetails": {
          "wantedJobTitle": "Frontend Developer",
          "firstName": "Giulia",
          "lastName": "Radu",
          "email": "radugiulia@yahoo.com",
          "phone": "0769070343",
          "country": "Romania",
          "city": "Brasov",
          "profilePhoto": "",
          "id": 5
      },
      "employmentHistories": [
          {
              "jobTitle": "Junior Frontend Developer",
              "employer": "PartGroup",
              "startDate": "2023-06-05",
              "endDate": "2023-06-05",
              "city": "Brasov",
              "description": "Implemented numerous features and stuff",
              "id": 7
          },
          {
              "jobTitle": "Frontend Developer Intern",
              "employer": "SmartParts SRL",
              "startDate": "2023-06-05",
              "endDate": "2023-06-05",
              "city": "Brasov",
              "description": "Learned web programming",
              "id": 8
          }
      ],
      "educations": [
          {
              "institution": "Univeristy Of Transylvania",
              "degree": "Bachelor",
              "startDate": "2023-06-05",
              "endDate": "2023-06-05",
              "city": "Brasov",
              "description": "Brasov",
              "id": 5
          },
          {
              "institution": "Univeristy Of Transylvania",
              "degree": "Master",
              "startDate": "2023-06-05",
              "endDate": "2023-06-05",
              "city": "Brasov",
              "description": "Brasov",
              "id": 6
          }
      ],
      "id": 11
  }
    const response = await axios.post(API_URL, cvSample, {
      headers: {
        authorization: token,
      }
    });
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