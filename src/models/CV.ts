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
  jobTitle: string;
  employer: string;
  startDate: string | Date;
  endDate: string | Date;
  city: string;
  description: string;
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