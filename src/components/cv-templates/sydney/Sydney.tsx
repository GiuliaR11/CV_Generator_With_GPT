import { Group, createStyles } from "@mantine/core";
import { BriefSummary } from "./BriefSummary";
import { Summary } from "./Summary";

const useStyles = createStyles((theme) => ({
  container: {
    height: '100%',
  },
}))

export function Sydney ({selectedColor, cv}: any) {
  const { classes } = useStyles()

  return (
    <>
      <Group align="start" spacing={0} className={classes.container}>
        <BriefSummary selectedColor={selectedColor} cv={cv}/>
        <Summary selectedColor={selectedColor} cv={cv}/>
      </Group>
    </>
  )
}