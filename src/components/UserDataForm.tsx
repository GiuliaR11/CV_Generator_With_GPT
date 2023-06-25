import { ActionIcon, Card, Container, Grid, Group, Stack, TextInput, Textarea, Title, createStyles } from "@mantine/core";
import { PersonalDetails } from "./user-data-sections/personal-details/PersonalDetails";
import { EmploymentHistory } from "./user-data-sections/employment-history/EmploymentHistory";
import { Education } from "./user-data-sections/education/Education";
import { FileText, Settings2 } from "tabler-icons-react";
import { SkillsSection } from "./user-data-sections/SkillsSection";

export function UserDataForm({forms}: any) {
  const useStyles = createStyles((theme) => ({
    card: {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },
    fileIcon: {
      color: theme.colors.blue[6]
    }
  }))

  const { classes } = useStyles();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Container>
        <Stack>
          <Stack>
          <Group>
            <FileText className={classes.fileIcon}/>
          <Title order={4}>CV Details</Title>
        </Group>
          <form>
            <Grid>
              <Grid.Col span={6} >
                <TextInput
                  withAsterisk
                  label="CV File Name"
                  placeholder="e.g. My First Cv"
                  {...forms.cvdetails.getInputProps('name')}
                />
              </Grid.Col>
              <Grid.Col span={6}/>
              </Grid>
            </form>
            <PersonalDetails form={forms.personalDetails} />
            <EmploymentHistory form={forms.employmentHistories}/>
            <Education form={forms.educations}/>
            <Stack spacing={'xl'}>
              <SkillsSection form={forms.skills} name={'Skills'}/>
              <SkillsSection form={forms.languages} name={'Languages'}/>
            </Stack>
            <Group>
              <ActionIcon color="blue">
                <Settings2/>
              </ActionIcon>
              <Title order={4}>Technical expertise</Title>
            </Group>
            <form>
            <Textarea
              minRows={5}
              placeholder="e.g. Medium knowledge of React JS..."
              label="Technical expertise"
              required
              {...forms.technicalExpertise.getInputProps('technicalExpertise')}
            />
            </form>
          </Stack>
        </Stack>
      </Container>
    </Card>
  )
}