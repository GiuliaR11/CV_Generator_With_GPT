import { Accordion, ActionIcon, Box, Button, Flex, Group, Title, createStyles } from "@mantine/core";
import { EducationSection } from "./EducationSection";
import { School } from "tabler-icons-react";
import { memo } from "react";
import { UseFormReturnType } from "@mantine/form";
import { IEducationForm } from "../../../hooks/useEducationForm";
import { randomId } from "@mantine/hooks";
import { Education as EducationSectionInterface } from "../../../models/CV";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.white,
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4]
  },
}))

interface Props {
  form: UseFormReturnType<IEducationForm>
}

export const Education = memo(({form}: Props) => {
  const { classes } = useStyles();

  const handleAddSectionClicked = () => {
    form.insertListItem('educations', 
    {
      institution: '',
      degree: '',
      startDate: '',
      endDate: '',
      city: '',
      description: '',
      key: randomId()
    })
  };

  const handleRemoveSectionClicked = (index: number) => {
    form.removeListItem('educations', index)
  }

  console.log(form)
  
  return (
    <>
      <Group>
        <ActionIcon color="blue">
          <School/>
        </ActionIcon>
        <Title order={4}>Education</Title>
      </Group>
      <span>A varied education on your resume sums up the value that your learnings and background will bring to job.</span>
      <Box>
        <Accordion variant="separated" radius="sm" defaultValue={`Institution ${1}`}>
          {form.values.educations.map((educationSection: EducationSectionInterface, index: number) => 
            <Accordion.Item value={`Institution ${index+1}`} className={classes.card} key={index}>
              <Accordion.Control>{educationSection.institution.length ? educationSection.institution : `Institution ${index+1}`}</Accordion.Control>
              <Accordion.Panel>
                <EducationSection 
                  form={form} 
                  handleRemoveSection={() => handleRemoveSectionClicked(index)}
                  index={index}
                />
              </Accordion.Panel>
            </Accordion.Item>
          )}
        </Accordion>
      </Box>
      <Flex justify='end'>
        <Button variant="outline" onClick={handleAddSectionClicked}>Add section</Button>
      </Flex>
    </>
  )
});
