import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";

export interface IEducationSectionForm {
  institution: string
  degree: string
  startDate: string
  endDate: string
  city: string
  description: string
  key: string
}

export interface IEducationForm {
  education: IEducationSectionForm[]
}

export const useEducationForm = () => useForm<IEducationForm>({
    initialValues: {
      education: [
        {
          institution: '',
          degree: '',
          startDate: '',
          endDate: '',
          city: '',
          description: '',
          key: randomId()
        }
      ],
    },

    validate: {
      education: {
        institution: (value) => value.trim().length > 0 ? null : 'Institution is required',
        degree: (value: string) => value.trim().length > 0 ? null : 'Degree is required',
        startDate: (value) => value ? null : 'Start date is required',
        endDate: (value) => value ? null : 'End date is required',
        city: (value) => value.trim().length > 0 ? null : 'City is required',
      },
    },

  validateInputOnBlur: ['institution', 'degree', 'startDate', 'endDate', 'city']
})
