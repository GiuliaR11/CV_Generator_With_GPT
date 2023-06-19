import { useForm } from "@mantine/form";
import { randomId } from "@mantine/hooks";

export interface IEmploymentHistorySectionForm {
  jobTitle: string;
  employer: string;
  startDate: string | Date;
  endDate: string | Date;
  description: string;
  city: string;
  key: string
}

export interface IEmploymentHistoryForm {
  employmentHistories: IEmploymentHistorySectionForm[]
}

export const useEmploymentHistoryForm = () => useForm<IEmploymentHistoryForm>({
    // initialValues: {
    //   employmentHistories: [
    //     {
    //       jobTitle: '',
    //       employer: '',
    //       startDate: '',
    //       endDate: '',
    //       city: '',
    //       description: '',
    //       key: randomId()
    //     }
    //   ],
    // },

    validate: {
      employmentHistories: {
        jobTitle: (value) => value.trim().length > 0 ? null : 'Job title is required',
        employer: (value: string) => value.trim().length > 0 ? null : 'Employer is required',
        startDate: (value) => value ? null : 'Start Date is required',
        endDate: (value) => value ? null : 'End Date is required',
        city: (value) => value.trim().length > 0 ? null : 'City is required',
      },
    },

  validateInputOnBlur: ['jobTitle', 'employer', 'startDate', 'endDate', 'city']
})
