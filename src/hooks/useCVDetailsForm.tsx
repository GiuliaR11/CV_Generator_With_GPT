import { useForm } from "@mantine/form";

export interface ICVDetailsForm {
  name: string;
}

export const useCVDetailsForm = () => {
  return useForm<any>({
    validate: {
      name: (value) => value.trim().length > 0 ? null : 'File name is required',
    },
    validateInputOnBlur: ['name']
  })
}
