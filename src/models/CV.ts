import { randomId } from "@mantine/hooks"

export type Templates = 'Sydney' | 'Vancouver' | 'Oslo' | 'Rio' | 'Singapore' | 'Madrid'

export interface CV {
  id?: any
  name: string
  templateName: Templates
  templateColor: string
  templateBackground: string
  personalDetails: PersonalDetails
  technicalExpertise: string
  skills: string[]
  languages: string[]
  employmentHistories: EmploymentHistory[];
  educations: Education[];
}

export interface PersonalDetails {
  id?: any
  wantedJobTitle: string;
  professionalSummary: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
}

export interface EmploymentHistory {
  id?: any
  jobTitle: string;
  employer: string;
  startDate: string | Date;
  endDate: string | Date;
  city: string;
  description: string;
  key: string
}

export interface Education {
  id?: any
  institution: string;
  degree: string;
  startDate: string | Date;
  endDate: string | Date;
  city: string;
  description: string;
  key?: string
}

export const newEmptyCV: CV = {
  name: '',
  templateName: 'Sydney',
  templateColor: '',
  templateBackground: '',
  technicalExpertise: '',
  skills: [],
  languages: [],
  personalDetails: {
    wantedJobTitle: '',
    professionalSummary: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: ''
  },
  employmentHistories: [
    {
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
      key: randomId(),
    }
  ],
  educations: [
    {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
      key: randomId(),
    }
  ],
}

export const mapCVResponse = (data: CV) => {
  return ({
    id: data?.id,
    name: data?.name,
    templateName: data?.templateName,
    templateColor: data?.templateColor,
    templateBackground: data?.templateBackground,
    technicalExpertise: data?.technicalExpertise,
    skills: JSON.parse(data?.skills as unknown as string)['skills'],
    languages: JSON.parse(data?.languages as unknown as string)['languages'],
    personalDetails: {
      wantedJobTitle: data?.personalDetails?.wantedJobTitle,
      professionalSummary: data?.personalDetails?.professionalSummary,
      firstName: data?.personalDetails?.firstName,
      lastName: data?.personalDetails?.lastName,
      email: data?.personalDetails?.email,
      phone: data?.personalDetails?.phone,
      country: data?.personalDetails?.country,
      city: data?.personalDetails?.city
    },
    employmentHistories: data.employmentHistories.map((history: EmploymentHistory) => (
      {
        jobTitle: history?.jobTitle,
        employer: history?.employer,
        startDate: history?.startDate,
        endDate: history?.endDate,
        city: history?.city,
        description: history?.description,
        key: randomId(),
        id: history?.id
      })
    ),
    educations: data.educations.map((education: Education) => (
      {
        institution: education?.institution,
        degree: education?.degree,
        startDate: education?.startDate,
        endDate: education?.endDate,
        city: education?.city,
        description: education?.description,
        key: randomId(),
        id: education?.id
      }),
    )
  })
}