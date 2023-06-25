import { Box, Divider, Stack, Text, Title, createStyles } from "@mantine/core"
import { Education } from "../../../models/CV";
import moment from "moment";

export function BriefSummary({selectedColor, cv}: any){
  const useStyles = createStyles((theme) => ({
    leftContainer: {
      backgroundColor: selectedColor,
      width: '35%',
      height: '100%',
      padding: '2rem'
    },
    contrastText: {
      color: theme.white
    },
    skills: {
      margin: '0',
      paddingLeft: '1rem',
      color: theme.white
    }
  }))

  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.leftContainer}>
        <Stack spacing={"xl"}>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Contact</Title>
              <Divider my="sm" />
            </Box>
            <Box>
              <Text fw={500} className={classes.contrastText}>Email</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>{cv.personalDetails.email}</Text>
            </Box>
            <Box>
              <Text fw={500} className={classes.contrastText}>Phone</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>{cv.personalDetails.phone}</Text>
            </Box>
            <Box>
              <Text fw={500} className={classes.contrastText}>Address</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>{cv.personalDetails.city}</Text>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Education</Title>
              <Divider my="sm" />
            </Box>
            {cv.educations.map((education: Education, index: number) => (
              <Box>
                <Text fw={500} className={classes.contrastText}>{`${moment(education.startDate).format("MMMM Do YYYY")} - ${moment(education.endDate).format("MMMM Do YYYY")}`}</Text>
                <Text fz="sm" fw={400} className={classes.contrastText}>{education.degree}</Text>
                <Text fz="sm" fw={300} className={classes.contrastText}>{`${education.institution}, ${education.city}`}</Text>
              </Box>
            ))}
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Skills</Title>
              <Divider my="sm" />
            </Box>
            <ul className={classes.skills}>
              {cv.skills.map((skill: string) => (
                <li>{skill}</li>
              ))}
            </ul>
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Languages</Title>
              <Divider my="sm" />
            </Box>
            <Box>
              {cv.languages.map((language: string) => (
                <Text fz="md" fw={300} className={classes.contrastText}>{language}</Text>
              ))}
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}