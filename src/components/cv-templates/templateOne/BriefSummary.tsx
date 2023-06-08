import { Box, Divider, Stack, Text, Title, createStyles } from "@mantine/core"

const useStyles = createStyles((theme) => ({
  leftContainer: {
    backgroundColor: '#323B4C',
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

export function BriefSummary(){
  const mockUserData = {
    personalDetails: {
      wantedJobTitle: 'Frontend Developer',
      firstName: 'Giulia',
      lastName: 'Radu',
      email: 'radugiulia@yahoo.com',
      phone: '0769070343',
      country: 'Romania',
      city: 'Brasov',
    },
    employmentHistory: [
      {
        jobTitle: 'Junior Frontend Developer',
        employer: 'PartGroup',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        city: 'Brasov',
        description: 'Implemented numerous features and stuff'
      },
      {
        jobTitle: 'Frontend Developer Intern',
        employer: 'SmartParts SRL',
        startDate: new Date().toDateString(),
        endDate: new Date().toDateString(),
        city: 'Brasov',
        description: 'Learned web programming'
      }
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
              <Text fz="sm" fw={100} className={classes.contrastText}>{mockUserData.personalDetails.email}</Text>
            </Box>
            <Box>
              <Text fw={500} className={classes.contrastText}>Phone</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>{mockUserData.personalDetails.phone}</Text>
            </Box>
            <Box>
              <Text fw={500} className={classes.contrastText}>Address</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>{mockUserData.personalDetails.city}</Text>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Education</Title>
              <Divider my="sm" />
            </Box>
            {mockUserData.education.map((education, index) => (
              <Box>
                <Text fw={500} className={classes.contrastText}>{`${mockUserData.education[index].startDate} - ${mockUserData.education[index].endDate}`}</Text>
                <Text fz="sm" fw={400} className={classes.contrastText}>{mockUserData.education[index].degree}</Text>
                <Text fz="sm" fw={100} className={classes.contrastText}>{`${mockUserData.education[index].institution}, ${mockUserData.education[index].city}`}</Text>
              </Box>
            ))}
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Expertise</Title>
              <Divider my="sm" />
            </Box>
            <ul className={classes.skills}>
              <li>CSS</li>
              <li>HTML</li>
              <li>Javacript</li>
              <li>Vue JS</li>
              <li>VueX</li>
              <li>Vuetify</li>
            </ul>
          </Stack>
          <Stack>
            <Box>
              <Title className={classes.contrastText} fz="xl">Languages</Title>
              <Divider my="sm" />
            </Box>
            <Box>
              <Text fz="sm" fw={100} className={classes.contrastText}>English</Text>
              <Text fz="sm" fw={100} className={classes.contrastText}>German</Text>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </>
  )
}