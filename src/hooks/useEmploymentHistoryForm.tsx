import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";

export interface IEmploymentHistorySectionForm {
  jobTitle: string;
  employer: string;
  startDate: string;
  endDate: string;
  description: string;
  city: string;
  key: string
}

export interface IEmploymentHistoryForm {
  employmentHistory: IEmploymentHistorySectionForm[]
}

export const useEmploymentHistoryForm = () => useForm<IEmploymentHistoryForm>({
    initialValues: {
      employmentHistory: [
        {
          jobTitle: '',
          employer: '',
          startDate: '',
          endDate: '',
          city: '',
          description: '',
          key: randomId()
        }
      ],
    },

    validate: {
      employmentHistory: {
        jobTitle: (value) => value.trim().length > 0 ? null : 'Job title is required',
        employer: (value: string) => value.trim().length > 0 ? null : 'Employer is required',
        startDate: (value) => value ? null : 'Start Date is required',
        endDate: (value) => value ? null : 'End Date is required',
        city: (value) => value.trim().length > 0 ? null : 'City is required',
      },
    },

  validateInputOnBlur: ['jobTitle', 'employer', 'startDate', 'endDate', 'city']
})
