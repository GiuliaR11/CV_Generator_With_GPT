import { TextInput, Textarea, Grid, Title, ActionIcon, Group } from "@mantine/core";
import { UseFormReturnType } from '@mantine/form';
import { User } from "tabler-icons-react";
import { IPersonalDetailsForm } from "../../../hooks";
import { memo } from "react";

interface Props {
  form: UseFormReturnType<IPersonalDetailsForm>
}

export const PersonalDetails = memo(({form}: Props) => {
  // const buildOnSumbit = useCallback(
  //   () => form.onSubmit((values) => console.log(values)),
  //   [form]
  // );

  return (
    <>
        <Group>
          <ActionIcon color="blue">
            <User/>
          </ActionIcon>
          <Title order={4}>Personal Details</Title>
        </Group>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Wanted Job Title"
                placeholder="e.g. Frontend Developer"
                {...form.getInputProps('wantedJobTitle')}
              />
            </Grid.Col>
            <Grid.Col span={6}/>
            <Grid.Col span={12}>
              <Textarea
                minRows={5}
                placeholder="e.g. Passionate Frontend Devloper with over 5+ years of experience..."
                label="Professional Summary"
                required
                {...form.getInputProps('professionalSummary')}
              />
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="First Name"
                {...form.getInputProps('firstName')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Last Name"
                {...form.getInputProps('lastName')}
              />
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Email"
                {...form.getInputProps('email')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Phone"
                {...form.getInputProps('phone')}
              />
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Country"
                {...form.getInputProps('country')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="City"
                {...form.getInputProps('city')}
              />
            </Grid.Col>
          </Grid>
        </form>
    </>
  )
});
