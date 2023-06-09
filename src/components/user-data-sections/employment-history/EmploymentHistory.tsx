import { Accordion, ActionIcon, Box, Button, Flex, Grid, Group, TextInput, Textarea, Title, createStyles } from "@mantine/core";
import { IconBriefcase } from "@tabler/icons-react";
import { memo } from "react";
import { UseFormReturnType } from "@mantine/form";
import { randomId } from "@mantine/hooks";
import { MonthPickerInput } from "@mantine/dates";
import { IEmploymentHistoryForm } from "../../../hooks/useEmploymentHistoryForm";
import { EmploymentHistory as EmploymentHistoryType} from "../../../models/CV";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.white,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
  },
  addButton: {
    marginTop: '1rem',
  }
}))

interface Props {
  form: UseFormReturnType<IEmploymentHistoryForm>
}

export const EmploymentHistory = memo(({form}: Props) => {
  const { classes } = useStyles();

  const handleAddSectionClicked = () => {
    form.insertListItem('employmentHistories', 
    {
      jobTitle: '',
      employer: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
      key: randomId() 
    })
  };

  const handleRemoveSectionClicked = (index: number) => {
    form.removeListItem('employmentHistories', index)
  }
  
  return (
    <>
      <Group>
        <ActionIcon color="blue">
          <IconBriefcase/>
        </ActionIcon>
        <Title order={4}>Employment History</Title>
      </Group>
      <span>Show your relevant experience (last 10 years). Note your achievements, if possible - use numbers/facts (Achieved X, measured by Y, by doing Z).</span>
      <Box>
        <Accordion variant="separated" radius="sm" defaultValue={`Job ${1}`}>
          {form.values.employmentHistories.map((historySection: EmploymentHistoryType, index: number) => 
            <Accordion.Item value={`Job ${index+1}`} className={classes.card} key={index}>
              <Accordion.Control>{historySection.employer.length ? historySection.employer : `Job ${index+1}`}</Accordion.Control>
              <Accordion.Panel>
                <Grid>
                  <Grid.Col span={6}>
                    <TextInput
                      withAsterisk
                      label="Job Title"
                      placeholder="e.g. Frontend Developer"
                      {...form.getInputProps(`employmentHistories.${index}.jobTitle`)}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      withAsterisk
                      label="Employer"
                      placeholder="e.g. Google Inc."
                      {...form.getInputProps(`employmentHistories.${index}.employer`)}
                    />
                  </Grid.Col>
                  <Grid.Col span={3}>
                  <MonthPickerInput
                    label="Start date"
                    placeholder="Pick date"
                    {...form.getInputProps(`employmentHistories.${index}.startDate`)}
                  />
                  </Grid.Col>
                  <Grid.Col span={3} >
                    <MonthPickerInput
                      label="End date"
                      placeholder="Pick date"
                      {...form.getInputProps(`employmentHistories.${index}.endDate`)}
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      withAsterisk
                      label="City"
                      {...form.getInputProps(`employmentHistories.${index}.city`)}
                    />
                  </Grid.Col>
                  <Grid.Col span={12} >
                    <Textarea
                      minRows={5}
                      placeholder="e.g. Improved application performance with over 50%. Improved SEO and UX."
                      label="Description"
                      required
                      {...form.getInputProps(`employmentHistories.${index}.description`)}
                    />
                  </Grid.Col>
                  {form.values.employmentHistories.length > 1 &&
                  <Grid.Col>
                    <Button variant="outline" color="red" onClick={() => handleRemoveSectionClicked(index)}>Delete section</Button>
                  </Grid.Col>}
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          )}
          <Flex justify='end'>
            <Button variant="outline" onClick={handleAddSectionClicked} className={classes.addButton}>Add section</Button>
          </Flex>
        </Accordion>
      </Box>
    </>
  )
});
