import { randomId } from "@mantine/hooks"

export type Templates = 'Sydney' | 'Vancouver' | 'Oslo' | 'Rio' | 'Singapore' | 'Madrid'

export interface CV {
  id?: any
  name: string
  templateName: Templates
  templateColor: string
  personalDetails: PersonalDetails
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