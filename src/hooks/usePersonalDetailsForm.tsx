import { useForm } from "@mantine/form";

export interface IPersonalDetailsForm {
  wantedJobTitle: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  profilePhoto: string;
  professionalSummary: string;
}

export const usePersonalDetailsForm = () => useForm<IPersonalDetailsForm>({
  initialValues: {
    wantedJobTitle: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    profilePhoto: '',
    professionalSummary: ''
  },
  validate: {
    wantedJobTitle: (value) => value.trim().length > 0 ? null : 'Job title is required',
    firstName: (value: string) => value.trim().length > 0 ? null : 'First name is required',
    lastName: (value) => value.trim().length > 0 ? null : 'Last name is required',
    phone: (value) => value.trim().length > 9 ? null : 'Invalid phone',
    email: (value) => /^\S+@\S+$/.test(value) ? null : 'Invalid email',
    city: (value) => value.trim().length > 0 ? null : 'City is required',
    country: (value) => value.trim().length > 0 ? null : 'Country is required',
    professionalSummary: (value) => value.trim().length > 0 ? null : 'Professional summary is required',
  },
  validateInputOnBlur: ['wantedJobTitle', 'firstName', 'lastName', 'email', 'phone', 'professionalSummary']
});
