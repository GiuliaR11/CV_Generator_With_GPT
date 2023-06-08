import { Container, Group, createStyles } from "@mantine/core";
import { BriefSummary } from "./BriefSummary";
import { Summary } from "./Summary";

const useStyles = createStyles((theme) => ({
  mainContainer: {
    padding: '0',
    height: '296mm',
    border: '0.1px solid',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
}))

export function TemplateOne () {
  const { classes } = useStyles();

  return (
    <>
      <Container className={classes.mainContainer}>
        <Group className={classes.mainContainer} align="start" spacing={0}>
          <BriefSummary/>
          <Summary/>
        </Group>
      </Container>
    </>
  )
}