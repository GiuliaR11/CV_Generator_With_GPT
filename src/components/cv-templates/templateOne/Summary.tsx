import { Text, Group, Stack, Title, createStyles, rem, Box, Divider, Timeline } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  leftContainer: {
    backgroundColor: '#323B4C',
    width: rem(300),
    height: '100%',
    padding: '2rem'
  },
  accentText: {
    color: '#323B4C'
  },
  skills: {
    margin: '0',
    paddingLeft: '1rem',
    color: theme.white
  },
  mainContainer: {
    width: '65%',
    padding: '2rem'
  },
}))

export function Summary() {
  const mockUserData = {
    personalDetails: {
      wantedJobTitle: 'Frontend Developer',
      firstName: 'Giulia',
      lastName: 'Radu',
      email: 'radugiulia@yahoo.com',
      phone: '0769070343',
      country: 'Romania',
      city: 'Brasov',
      profilePhoto: '',
      professionalSummary: 'Proven ability to establish and maintain excellent communication and relationships with clients. Adept in general accounting and finance transactions. Dedicated to identifying customer needs and delivering effective solutions to all problems. Excellent time management skills combined with a superior knowledge of the customer service industry. Bilingual, hardworking, and ready to join my next team.'
    },
    employmentHistory: [
      {
        jobTitle: 'Junior Frontend Developer',
        employer: 'PartGroup',
        startDate: 'July 2021',
        endDate: 'Present',
        city: 'Brasov',
        description: 'Learned web programming. Implemented numerous features and stuff. Implemented numerous features and stuff. Implemented numerous features and stuff'
      },
      {
        jobTitle: 'Frontend Developer Intern',
        employer: 'SmartParts SRL',
        startDate: 'July 2021',
        endDate: 'July 2022',
        city: 'Brasov',
        description: 'Learned web programming. Implemented numerous features and stuff. Implemented numerous features and stuff. Implemented numerous features and stuff'
      },
      {
        jobTitle: 'Frontend Developer Intern',
        employer: 'SmartParts SRL',
        startDate: 'June 2020',
        endDate: 'April 2021',
        city: 'Brasov',
        description: 'Learned web programming. Implemented numerous features and stuff. Implemented numerous features and stuff. Implemented numerous features and stuff'
      },
    ],
    education: [
      {
        institution: 'Univeristy Of Transylvania',
        degree: 'Bachelor',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        city: 'Brasov',
        description: 'Brasov'
      },
      {
        institution: 'Univeristy Of Transylvania',
        degree: 'Master',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        city: 'Brasov',
        description: 'Brasov'
      }
    ]
  }

  const getLabel = (job: any) => {
    return (
      <Group spacing={1}>
        <Text fz="sm" fw={400} className={classes.accentText}>{job.startDate}</Text>
        <Text fz="sm" fw={400} className={classes.accentText}>-</Text>
        <Text fz="sm" fw={400} className={classes.accentText}>{job.endDate}</Text>
      </Group>
    )
  }

  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.mainContainer} spacing={"xl"}>
        <Stack>
          <Group>
            <Title className={classes.accentText}>{mockUserData.personalDetails.firstName}</Title>
            <Title className={classes.accentText} fw={400}>{mockUserData.personalDetails.lastName}</Title>
          </Group>
          <Title className={classes.accentText} order={3} fw={400}>{mockUserData.personalDetails.wantedJobTitle}</Title> 
          <Text fz="sm" color="dimmed">{mockUserData.personalDetails.professionalSummary}</Text>
        </Stack>
        <Box>
          <Title className={classes.accentText} fz="xl">Experience</Title>
          <Divider my="sm" />
          <Timeline active={0} bulletSize={24} lineWidth={2}>
          {mockUserData.employmentHistory.map((job, index) => (
            <Timeline.Item title={job.employer} className={classes.accentText}>
              <Text color="dimmed" size="sm">{job.description}</Text>
              <Text size="xs" mt={4} className={classes.accentText}>{getLabel(job)}</Text>
            </Timeline.Item>
          ))}
          </Timeline>
        </Box>
        <Box>
          <Title className={classes.accentText} fz="xl">Technical Expertise</Title>
          <Divider my="sm" />
        </Box>
      </Stack>
    </>
  )
}