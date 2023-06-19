import { Box, Group, Stack, Title, createStyles, Text } from "@mantine/core";
import { Mail, MapPin, Phone } from "tabler-icons-react";
import { Education, EmploymentHistory } from "../../../models/CV";
import moment from "moment";

export function Oslo ({selectedColor, cv}: any) {
  
  const useStyles = createStyles((theme) => ({
    cvContainer: {
      fontFamily: 'serif'
    },
    header: {
      height: '8rem',
      backgroundColor: selectedColor,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'serif'
    },
    headerInfo: {
      height: '3rem',
      backgroundColor: selectedColor,
      paddingLeft: '1rem',
      justifyContent: 'center',
      fontFamily: 'serif'
    },
    headerContainer: {
      height: '100%',
      display: 'flex',
      fontFamily: 'serif'
    },
    basicText: {
      color: theme.white,
      textAlign: 'justify',
      fontFamily: 'serif'
    },
    accentText: {
      color: theme.white,
      fontFamily: 'serif'
    },
    colorText: {
      fontFamily: 'serif',
      color: selectedColor
    },
    text: {
      fontFamily: 'serif',
    },
    divider: {
      margin: '0'
    }
}))

  const { classes } = useStyles();

  return (
    <>
      <Box className={classes.cvContainer}>
        <div>
          <div className={classes.header}>
            <Title className={classes.basicText}>{`${cv.personalDetails.lastName} ${cv.personalDetails.firstName}`}</Title>
            <Title className={classes.accentText} order={3} fw={400}>{cv.personalDetails.wantedJobTitle}</Title>
          </div>
          <hr className={classes.divider}/>
          <Group className={classes.headerInfo} spacing={'xl'}>
            <Group spacing={'xs'}>
              <Mail color="white"/>
              <Text fz="md" fw={400} className={classes.basicText}>{cv.personalDetails.email}</Text>
            </Group>
            <Group spacing={'xs'}>
              <Phone color="white"/>
              <Text fz="md" fw={400} className={classes.basicText}>{cv.personalDetails.phone}</Text>
            </Group>
            <Group spacing={'xs'}>
              <MapPin color="white"/>
              <Text fz="md" fw={400} className={classes.basicText}>{cv.personalDetails.city}, {cv.personalDetails.country}</Text>
            </Group>
          </Group>
        </div>
        <Box p={30}>
          <Stack spacing={'xl'}>
            <Stack>
              <Title fz="xl" className={classes.colorText}>Profile</Title>
              <Text fz="md" pl={10} className={classes.text} fw={400}>{cv.personalDetails.professionalSummary}</Text>
            </Stack>
            <Box>
              <Stack>
                <Title className={classes.colorText} fz="xl">Proffesional Experience</Title>
                {cv.employmentHistories.map((exp: EmploymentHistory) => (
                  <Stack pl={10} spacing={'xs'}>
                    <Title fz="lg" className={classes.colorText}>{exp.jobTitle} at {exp.employer}</Title>
                    <Text fz="md" className={classes.colorText}>{moment(exp.startDate).format("MMMM Do YYYY")} - {moment(exp.endDate).format("MMMM Do YYYY")}</Text>
                    <Text fz="md" className={classes.text} fw={400}>{exp.description}</Text>
                  </Stack>
                ))}
                
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Title className={classes.colorText} fz="xl">Education</Title>
                {cv.educations.map((ed: Education) => (
                  <Stack pl={10} spacing={'xs'}>
                    <Title fz="lg" className={classes.colorText}>{ed.degree}'s degree at {ed.institution}</Title>
                    <Text fz="md" className={classes.colorText}>{moment(ed.startDate).format("MMMM Do YYYY")} - {moment(ed.endDate).format("MMMM Do YYYY")}</Text>
                    <Text fz="md" className={classes.text} fw={400}>{ed.description}</Text>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  )
}