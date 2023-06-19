import { Text, Group, Stack, Title, createStyles, rem, Box, Divider, Timeline } from "@mantine/core"
import { CV } from "../../../models/CV"
import moment from "moment"

interface Props {
  selectedColor: string
  cv: CV
}

export function Summary({selectedColor, cv}: Props) {
  const useStyles = createStyles((theme) => ({
    leftContainer: {
      backgroundColor: selectedColor,
      width: rem(300),
      height: '100%',
      padding: '2rem'
    },
    accentText: {
      color: selectedColor
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

  const getLabel = (job: any) => {
    return (
      <Group spacing={1}>
        <Text fz="sm" fw={400} className={classes.accentText}>{moment(job.startDate).format("MMMM Do YYYY")}</Text>
        <Text fz="sm" fw={400} className={classes.accentText}>-</Text>
        <Text fz="sm" fw={400} className={classes.accentText}>{moment(job.endDate).format("MMMM Do YYYY")}</Text>
      </Group>
    )
  }

  const { classes } = useStyles();

  return (
    <>
      <Stack className={classes.mainContainer} spacing={"xl"}>
        <Stack>
          <Group>
            <Title className={classes.accentText}>{cv.personalDetails.firstName}</Title>
            <Title className={classes.accentText} fw={400}>{cv.personalDetails.lastName}</Title>
          </Group>
          <Title className={classes.accentText} order={3} fw={400}>{cv.personalDetails.wantedJobTitle}</Title> 
          <Text fz="sm" color="dimmed">{cv.personalDetails.professionalSummary}</Text>
        </Stack>
        <Box>
          <Title className={classes.accentText} fz="xl">Experience</Title>
          <Divider my="sm" />
          <Timeline active={0} bulletSize={24} lineWidth={2}>
          {cv.employmentHistories.map((job, index) => (
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