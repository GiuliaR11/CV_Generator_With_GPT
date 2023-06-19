import { useForm } from "@mantine/form";

export interface ICVDetailsForm {
  name: string;
}

export const useCVDetailsForm = () => {
  return useForm<any>({
    initialValues: {
      name: '',
    },

    validate: {
      name: (value) => value.trim().length > 0 ? null : 'File name is required',
    },
    validateInputOnBlur: ['name']
  })
}
