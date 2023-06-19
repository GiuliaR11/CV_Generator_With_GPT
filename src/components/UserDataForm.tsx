import { Card, Container, Grid, Group, Stack, TextInput, Title, createStyles } from "@mantine/core";
import { PersonalDetails } from "./user-data-sections/personal-details/PersonalDetails";
import { EmploymentHistory } from "./user-data-sections/employment-history/EmploymentHistory";
import { Education } from "./user-data-sections/education/Education";
import { FileText } from "tabler-icons-react";

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
          </Stack>
        </Stack>
      </Container>
    </Card>
  )
}