import axios from "axios";
import { LocalStorageKeys } from "../constants";

const API_URL = 'http://localhost:4000/gpt/models'
const token = localStorage.getItem(LocalStorageKeys.authorization)

const createPromptDavinci3 = async (textToRephrase: string): Promise<any> => {
  try {
    const url = `${API_URL}/davinci3/prompt`
    const task = 'Rephrase this as if I am writing a CV and make it sound very professional: '
    const response = await axios.post(url, {
        text: `${task}${textToRephrase}`,
        maxTokens: 40
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response.data.completions[0]
  } catch (error) {
    return ''
  }
}

const createPromptDavinci2 = async (textToRephrase: string): Promise<any> => {
  try {
    const url = `${API_URL}/davinci2/prompt`
    const task = 'Rephrase this as if I am writing a CV and make it sound very professional: '
    const response = await axios.post(url, {
        text: `${task}${textToRephrase}`,
        maxTokens: 5
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response.data.completions[0]
  } catch (error) {
    return ''
  }
}

const createPromptCurie = async (textToRephrase: string): Promise<any> => {
  try {
    const url = `${API_URL}/curie/prompt`
    const task = 'Rephrase this as if I am writing a CV and make it sound very professional: '
    const response = await axios.post(url, {
        text: `${task}${textToRephrase}`,
        maxTokens: 5
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response.data.completions[0]
  } catch (error) {
    return ''
  }
}

const createPromptBabbage = async (textToRephrase: string): Promise<any> => {
  try {
    const url = `${API_URL}/curie/prompt`
    const task = 'Rephrase this as if I am writing a CV and make it sound very professional: '
    const response = await axios.post(url, {
        text: `${task}${textToRephrase}`,
        maxTokens: 5
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response.data.completions[0]
  } catch (error) {
    return ''
  }
}

const createPromptAda = async (textToRephrase: string): Promise<any> => {
  try {
    const url = `${API_URL}/ada/prompt`
    const task = 'Rephrase this as if I am writing a CV and make it sound very professional: '
    const response = await axios.post(url, {
        text: `${task}${textToRephrase}`,
        maxTokens: 5
      },
      {
        headers: {
          authorization: token,
        }
      }
    );
    return response.data.completions[0]
  } catch (error) {
    return ''
  }
}

export {
  createPromptDavinci3,
  createPromptDavinci2,
  createPromptCurie,
  createPromptBabbage,
  createPromptAda
}