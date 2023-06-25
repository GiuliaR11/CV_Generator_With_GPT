import { Box, Group, Stack, Title, createStyles, Text } from "@mantine/core";
import { Award, Language, Mail, MapPin, Phone, School, Settings2, User } from "tabler-icons-react";
import { Education, EmploymentHistory } from "../../../models/CV";
import moment from "moment";
import { IconBriefcase } from "@tabler/icons-react";

export function Oslo ({selectedColor, cv}: any) {
  
  const useStyles = createStyles((theme) => ({
    cvContainer: {
      fontFamily: 'serif'
    },
    header: {
      height: '7rem',
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
          <Group className={classes.headerInfo} spacing={'sm'}>
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
          <Stack spacing={'sm'}>
            <Stack>
              <Group>
                <User color={selectedColor}/>
                <Title order={4} className={classes.colorText}>Profile</Title>
              </Group>
              <Text fz="sm" pl={40} className={classes.text} fw={400}>{cv.personalDetails.professionalSummary}</Text>
            </Stack>
            <Box>
              <Stack>
                <Group>
                  <IconBriefcase color={selectedColor}/>
                  <Title className={classes.colorText} order={4}>Proffesional Experience</Title>
                </Group>

                {cv.employmentHistories.map((exp: EmploymentHistory) => (
                  <Stack pl={40} spacing={'xs'}>
                    <Group>
                      <Title order={5} className={classes.colorText}>{exp.jobTitle} at {exp.employer}</Title>
                      <Text fz="sm" className={classes.text}>{moment(exp.startDate).format("MMMM Do YYYY")} - {moment(exp.endDate).format("MMMM Do YYYY")}</Text>
                    </Group>
                    <Text fz="sm" className={classes.text} fw={400}>{exp.description}</Text>
                  </Stack>
                ))}
                
              </Stack>
            </Box>
            <Box>
              <Stack>
                <Group>
                  <School color={selectedColor}/>
                  <Title className={classes.colorText} order={4}>Education</Title>
                </Group>
                {cv.educations.map((ed: Education) => (
                  <Stack pl={40} spacing={'xs'}>
                    <Group align="center">
                      <Title order={5} className={classes.colorText}>{ed.degree}'s degree at {ed.institution}</Title>
                      <Text fz="sm" className={classes.text}>{moment(ed.startDate).format("MMMM Do YYYY")} - {moment(ed.endDate).format("MMMM Do YYYY")}</Text>
                    </Group>
                  </Stack>
                ))}
              </Stack>
            </Box>
            <Stack>
              <Group>
                <Settings2 color={selectedColor}/>
                <Title order={4} className={classes.colorText}>Technical Expertise</Title>
              </Group>
              <Text fz="sm" pl={40} className={classes.text} fw={400}>{cv.technicalExpertise}</Text>
            </Stack>
            <Stack>
              <Group>
                <Award color={selectedColor}/>
                <Title order={4} className={classes.colorText}>Skills</Title>
              </Group>
              <Text fz="sm" pl={40} className={classes.text} fw={400}>{cv.skills.join(', ')}</Text>
            </Stack>
            <Stack>
              <Group>
                <Language color={selectedColor}/>
                <Title order={4} className={classes.colorText}>Languages</Title>
              </Group>
              <Text fz="sm" pl={40} className={classes.text} fw={400}>{cv.languages.join(', ')}</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}