import { TextInput, Textarea, Grid, Title, ActionIcon, Group, Stack, Text, Button, Paper, Select, Switch, createStyles, Tooltip } from "@mantine/core";
import { UseFormReturnType } from '@mantine/form';
import { Replace, Robot, User } from "tabler-icons-react";
import { IPersonalDetailsForm } from "../../../hooks";
import { memo, useState } from "react";
import { 
  createPromptAda, 
  createPromptBabbage, 
  createPromptCurie, 
  createPromptDavinci2, 
  createPromptDavinci3 
} from "../../../services/GPTService";

interface Props {
  form: UseFormReturnType<IPersonalDetailsForm>
}

export const PersonalDetails = memo(({form}: Props) => {
  
  const [showSuggestion, setShowSuggestion]= useState(false);
  const [suggestedChange, setSuggestedChange] = useState('');
  const [showAISection, setShowAISection] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>('ada')

  const rephraseWithAI = () => {
    setShowSuggestion(true)
    if (selectedModel === 'curie') {
      createPromptCurie(form.values.professionalSummary).then(
        suggestion => {
          console.log(suggestion)
          setSuggestedChange(suggestion)
        }
      )
      return
    }

    if (selectedModel === 'babbage') {
      createPromptBabbage(form.values.professionalSummary).then(
        suggestion => {
          console.log(suggestion)
          setSuggestedChange(suggestion)
        }
      )
      return
    }

    if (selectedModel === 'davinci2') {
      createPromptDavinci2(form.values.professionalSummary).then(
        suggestion => {
          console.log(suggestion)
          setSuggestedChange(suggestion)
        }
      )
      return
    }

    if (selectedModel === 'davinci3') {
      createPromptDavinci3(form.values.professionalSummary).then(
        suggestion => {
          console.log(suggestion)
          setSuggestedChange(suggestion)
        }
      )
      return
    }

    if (selectedModel === 'ada') {
      createPromptAda(form.values.professionalSummary).then(
        suggestion => {
          console.log(suggestion)
          setSuggestedChange(suggestion)
        }
      )
      return
    }
  }

  const useStyles = createStyles((theme) => ({
    accentText: {
      color: theme.colors.blue[6]
    }
  }))

  const handleModelChange = (value: string) => {
    setSelectedModel(value)
  }

  const replaceSummary = () => {
    const suggestion = suggestedChange.replace(/[\r\n]+/g, '')
    form.setFieldValue('professionalSummary', suggestion)
  }

  const {classes} = useStyles();
  
  return (
    <>
        <Group>
          <ActionIcon color="blue">
            <User/>
          </ActionIcon>
          <Title order={4}>Personal Details</Title>
        </Group>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Grid>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Wanted Job Title"
                placeholder="e.g. Frontend Developer"
                {...form.getInputProps('wantedJobTitle')}
              />
            </Grid.Col>
            <Grid.Col span={6}/>
            <Grid.Col span={12}>
              <Stack spacing={'xs'}>
                <Textarea
                  minRows={5}
                  placeholder="e.g. Passionate Frontend Devloper with over 5+ years of experience..."
                  label="Professional Summary"
                  required
                  {...form.getInputProps('professionalSummary')}
                />
                <Switch
                  label="Toggle AI suggestion generation"
                  checked={showAISection}
                  onChange={() => setShowAISection(!showAISection)}
                />
                {showAISection && <Group align="center">
                  <Select
                    label="Select AI Model"
                    placeholder="Pick one"
                    value={selectedModel}
                    onChange={handleModelChange}
                    data={[
                      { value: 'ada', label: 'Ada' },
                      { value: 'babbage', label: 'Babbage' },
                      { value: 'curie', label: 'Curie' },
                      { value: 'davinci3', label: 'DaVinci3' },
                      { value: 'davinci2', label: 'DaVinci2' },
                    ]}
                  />
                  <Button 
                    style={{marginTop: '1.5rem'}}
                    onClick={() => rephraseWithAI()} 
                    leftIcon={<Robot />} 
                    variant="light"
                  >
                    Rephrase using AI
                  </Button>
                </Group>}
                {showSuggestion && 
                <Paper shadow="xs" p="sm">
                  <Group>
                    <Text size="sm" className={classes.accentText}>Suggested change</Text>
                    <Tooltip label="Replace proffesional summary with suggested change" color="blue" withArrow position="right">
                      <ActionIcon color="blue" onClick={replaceSummary}>
                        <Replace/>
                      </ActionIcon>
                    </Tooltip>
                  </Group>
                  <Text>{suggestedChange}</Text>
                </Paper>
                }
              </Stack>
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="First Name"
                {...form.getInputProps('firstName')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Last Name"
                {...form.getInputProps('lastName')}
              />
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Email"
                {...form.getInputProps('email')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="Phone"
                {...form.getInputProps('phone')}
              />
            </Grid.Col>
            <Grid.Col span={6} >
              <TextInput
                withAsterisk
                label="Country"
                {...form.getInputProps('country')}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <TextInput
                withAsterisk
                label="City"
                {...form.getInputProps('city')}
              />
            </Grid.Col>
          </Grid>
        </form>
    </>
  )
});
