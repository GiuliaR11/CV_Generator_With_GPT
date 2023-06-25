import { useForm } from "@mantine/form";

export interface ILanguagesForm {
  languages: string[];
}

export const useLanguagesForm = () => useForm<ILanguagesForm>({
  initialValues: {
    languages: [],
  },
  validate: {
    languages: (value) => value?.length ? null : 'Languages are required'
  },
  validateInputOnBlur: ['languages']
});
