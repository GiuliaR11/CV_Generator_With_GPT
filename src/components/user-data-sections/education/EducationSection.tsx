import { Button, Grid, TextInput, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { IEducationForm } from "../../../hooks/useEducationForm";

interface Props {
  form: UseFormReturnType<IEducationForm>,
  handleRemoveSection: any
  index: number
}

export function EducationSection({form, handleRemoveSection, index}: Props) {

  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Institution"
            placeholder="e.g. Univeristy of Manchester"
            {...form.getInputProps(`educations.${index}.institution`)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Degree"
            placeholder="e.g. Bachelor"
            {...form.getInputProps(`educations.${index}.degree`)}
          />
        </Grid.Col>
        <Grid.Col span={3}>
        <MonthPickerInput
          label="Start date"
          placeholder="Pick date"
          {...form.getInputProps(`educations.${index}.startDate`)}
        />
        </Grid.Col>
        <Grid.Col span={3} >
          <MonthPickerInput
            label="End date"
            placeholder="Pick date"
            {...form.getInputProps(`educations.${index}.endDate`)}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="City"
            {...form.getInputProps(`educations.${index}.city`)}
          />
        </Grid.Col>
        <Grid.Col span={12} >
          <Textarea
            minRows={2}
            label="Description"
            {...form.getInputProps(`educations.${index}.description`)}
          />
        </Grid.Col>
        {form.values.educations.length > 1 &&
          <Grid.Col>
            <Button variant="outline" color="red" onClick={handleRemoveSection}>Delete section</Button>
          </Grid.Col>}
      </Grid>
    </>
  )
}