import { Group, Stack, Title, createStyles, Text, Box } from "@mantine/core";
import { Mail, Phone, MapPin, School, Settings2, Award, Language, ClipboardData } from "tabler-icons-react";
import { IconBriefcase } from "@tabler/icons-react";
import moment from "moment";
import { Education, EmploymentHistory } from "../../../models/CV";

export function Vancouver({cv, selectedColor, selectedBackground}: any) {
  const useStyles = createStyles((theme) => ({
    cvContainer: {
      fontFamily: 'serif',
      backgroundImage: `url(${selectedBackground})`,
      padding: '4rem',
      backgroundSize: 'cover', 
      height: '100%',
      width: '100%',
    },
    colorText: {
      fontFamily: 'cursive',
      color: selectedColor
    },
    text: {
      fontFamily: 'cursive',
    },
    name: {
      width: '40%'
    },
    bio: {
      paddingLeft: '2rem',
      width: '50%'
    },
    header: {
      justifyContent: 'space-between'
    },
    main: {
      paddingTop: '3rem'
    }
  }))

  const { classes } = useStyles();
  
  return (
    <div className={classes.cvContainer}>
      <Group className={classes.header}>
        <Stack className={classes.name}>
          <Title className={classes.colorText}>{`${cv.personalDetails.lastName} ${cv.personalDetails.firstName}`}</Title>
          <Title className={classes.colorText} order={3} fw={400}>{cv.personalDetails.wantedJobTitle}</Title>
        </Stack>
        <Stack className={classes.bio}>
          <Text fz="sm" className={classes.colorText} fw={400}>{cv.personalDetails.professionalSummary}</Text>
        </Stack>
      </Group>
      <Stack className={classes.main} spacing={'xl'}>
        <Box>
          <Stack>
            <Group>
              <IconBriefcase color={selectedColor}/>
              <Title className={classes.colorText} order={4}>Proffesional Experience</Title>
            </Group>
            {cv.employmentHistories.map((exp: EmploymentHistory) => (
              <Stack  spacing={'xs'}>
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
              <Stack spacing={'xs'}>
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
          <Text fz="sm" className={classes.text} fw={400}>{cv.technicalExpertise}</Text>
        </Stack>
        <Stack>
          <Group>
            <Award color={selectedColor}/>
            <Title order={4} className={classes.colorText}>Skills</Title>
          </Group>
          <Text fz="sm" className={classes.text} fw={400}>{cv.skills.join(', ')}</Text>
        </Stack>
        <Stack>
          <Group>
            <Language color={selectedColor}/>
            <Title order={4} className={classes.colorText}>Languages</Title>
          </Group>
          <Text fz="sm" className={classes.text} fw={400}>{cv.languages.join(', ')}</Text>
        </Stack>
        <Stack>
          <Group>
            <ClipboardData color={selectedColor}/>
            <Title order={4} className={classes.colorText}>Contact</Title>
          </Group>
          <Group>
            <Group spacing={'xs'}>
              <Mail color={selectedColor}/>
              <Text fz="md" fw={400} className={classes.text}>{cv.personalDetails.email}</Text>
            </Group>
            <Group spacing={'xs'}>
              <Phone color={selectedColor}/>
              <Text fz="md" fw={400} className={classes.text}>{cv.personalDetails.phone}</Text>
            </Group>
            <Group spacing={'xs'}>
              <MapPin color={selectedColor}/>
              <Text fz="md" fw={400} className={classes.text}>{cv.personalDetails.city}, {cv.personalDetails.country}</Text>
            </Group>
          </Group>
        </Stack>
      </Stack>
    </div>
  )
}