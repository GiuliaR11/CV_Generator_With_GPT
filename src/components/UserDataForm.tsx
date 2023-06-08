import { Card, Container, Stack, createStyles } from "@mantine/core";
import { PersonalDetails } from "./user-data-sections/personal-details/PersonalDetails";
import { EmploymentHistory } from "./user-data-sections/employment-history/EmploymentHistory";
import { Education } from "./user-data-sections/education/Education";
import { createCV } from "../services/CVService";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
  },
}))

export function UserDataForm({forms}: any) {
  const { classes } = useStyles();

  const handleOnCreateClicked = () => {
    console.log(forms)
    forms.personalDetails.validate()
    forms.employmentHistory.validate()
    forms.education.validate()
    if (forms.personalDetails.isValid() && forms.employmentHistory.isValid() && forms.personalDetails.isValid()) {
      createCV({
        education: forms.education.values.education,
        personalDetails: forms.personalDetails.values,
        employmentHistory: forms.employmentHistory.values.employmentHistory
      })
      .then(r => console.log(r))
    }
  }

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Container>
        <Stack>
          <Stack>
            <PersonalDetails form={forms.personalDetails} />
            <EmploymentHistory form={forms.employmentHistory}/>
            <Education form={forms.education}/>
          </Stack>
        </Stack>
      </Container>
    </Card>
  )
}