export interface CV {
  personalDetails: PersonalDetails
  employmentHistory: EmploymentHistory[];
  education: Education[];
}

export interface PersonalDetails {
  wantedJobTitle: string;
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
  startDate: string;
  endDate: string;
  city: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string;
  key?: string
}