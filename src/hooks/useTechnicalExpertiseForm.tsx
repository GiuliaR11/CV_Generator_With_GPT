import { useForm } from "@mantine/form";

export interface IExpertiseForm {
  technicalExpertise: string;
}

export const useTechnicalExpertiseForm = () => {
  return useForm<any>({
    initialValues: {
      technicalExpertise: '',
    },

    validate: {
      technicalExpertise: (value) => value.trim().length > 0 ? null : 'Technical Expertise is required',
    },
    validateInputOnBlur: ['technicalExpertise']
  })
}
