import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";

export interface IEducationSectionForm {
  institution: string
  degree: string
  startDate: string | Date
  endDate: string | Date
  city: string
  description: string
  key: string
}

export interface IEducationForm {
  educations: IEducationSectionForm[]
}

export const useEducationForm = () => useForm<IEducationForm>({
    initialValues: {
      educations: [
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
      educations: {
        institution: (value) => value.trim().length > 0 ? null : 'Institution is required',
        degree: (value: string) => value.trim().length > 0 ? null : 'Degree is required',
        startDate: (value) => value ? null : 'Start date is required',
        endDate: (value) => value ? null : 'End date is required',
        city: (value) => value.trim().length > 0 ? null : 'City is required',
      },
    },

  validateInputOnBlur: ['institution', 'degree', 'startDate', 'endDate', 'city']
})
