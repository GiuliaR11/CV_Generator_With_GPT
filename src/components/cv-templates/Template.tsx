import { Box, Container, Group, Image, Stack, createStyles } from "@mantine/core";
import { Sydney } from "./sydney/Sydney";
import { Oslo } from "./oslo/Oslo";
import { ColorSwatchesPicker } from "../ColorSwatchesPicker";
import { Dispatch, SetStateAction } from "react";
import { randomId } from "@mantine/hooks";
import { Vancouver } from "./vancouver/Vancouver";

const useStyles = createStyles((theme) => ({
  mainContainer: {
    padding: '0',
    height: '296mm',
    border: '0.1px solid',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
  picker: {
    width: '100%'
  },
  card: {
    border: '0.1px solid',
    borderRadius: '6px',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
    cursor: 'pointer',
  },
  selected: {
    border: '0.5px solid',
    borderColor: theme.colors.blue[3],
  }
}))

interface Props {
  isViewMode?: boolean
  selectedTemplate: string
  selectedColor: string
  selectedBackground: string
  forms: any
  backgrounds: any[],
  setSelectedColor?: Dispatch<SetStateAction<string>>
  setSelectedBackground: Dispatch<SetStateAction<string>>
}

export function Template ({selectedTemplate, selectedColor, setSelectedColor, selectedBackground, backgrounds, setSelectedBackground, forms, isViewMode}: Props) {
  const { classes } = useStyles();
  const mappedEducations = forms.educations.values.educations.map((ed: any) => ({
    institution: ed.institution ?? '',
    degree: ed.degree ?? '',
    startDate: new Date(ed.endDate) ?? new Date(),
    endDate: new Date(ed.startDate) ?? new Date(),
    city: ed.city ?? '',
    description: ed.description ?? '',
    key: randomId()
  }))

  const mappedEmploymentHistories = forms.employmentHistories.values.employmentHistories.map((history: any) => ({
    jobTitle: history.jobTitle ?? '',
    employer: history.employer ?? '',
    startDate: new Date(history.endDate) ?? new Date(),
    endDate: new Date(history.endDate) ?? new Date(),
    city: history.city ?? '',
    description: history.description ?? '',
    key: randomId()
  }))

  const cv = {
    name: forms.cvdetails.values.name,
    personalDetails: {
      wantedJobTitle: forms.personalDetails.values.wantedJobTitle,
      professionalSummary: forms.personalDetails.values.professionalSummary,
      firstName: forms.personalDetails.values.firstName,
      lastName: forms.personalDetails.values.lastName,
      email: forms.personalDetails.values.email,
      phone: forms.personalDetails.values.phone,
      country: forms.personalDetails.values.country,
      city: forms.personalDetails.values.city
    },
    employmentHistories: mappedEmploymentHistories,
    educations: mappedEducations,
    languages: forms.languages.values.languages,
    skills: forms.skills.values.skills,
    technicalExpertise: forms.technicalExpertise
    .values.technicalExpertise
  }

  return (
    <>
      <Stack>
        {!isViewMode && <ColorSwatchesPicker
          showSwatches={false}
          colorPalette={['#323B4C', '#827A72', '#A4928D', '#7E918F','#7B7F82']}
          selectedColor={selectedColor}
          handleColorChange={setSelectedColor}
        />}
        {
          selectedTemplate === 'Vancouver' && <Group pb={'lg'}>
            {backgrounds.map(bg => (
              <Box className={classes.card}>
                <Image
                  width={200}
                  height={200}
                  radius="md"
                  src={bg}
                  alt="Background image"
                  onClick={() => setSelectedBackground(bg)}
                />
              </Box>
            ))}
          </Group>
        }
        
      </Stack>
      
      {cv && <Container className={classes.mainContainer} id='printableComponent'>
        {selectedTemplate === 'Sydney' && <Sydney cv={cv} selectedColor={selectedColor}/>}
        {selectedTemplate === 'Oslo' && <Oslo cv={cv} selectedColor={selectedColor}/>}
        {selectedTemplate === 'Vancouver' && <Vancouver cv={cv} selectedColor={selectedColor} selectedBackground={selectedBackground}/>}
      </Container>}
    </>
  )
}