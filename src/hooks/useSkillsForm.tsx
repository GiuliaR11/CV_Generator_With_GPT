import { useForm } from "@mantine/form";

export interface ISkillsForm {
  skills: string[];
}

export const useSkillsForm = () => useForm<ISkillsForm>({
  initialValues: {
    skills: [],
  },
  validate: {
    skills: (value) => value?.length ? null : 'Skills are required'
  },
  validateInputOnBlur: ['skills']
});
