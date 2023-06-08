import { Grid, TextInput, Textarea } from "@mantine/core";
import { MonthPickerInput } from "@mantine/dates";
import { UseFormReturnType } from "@mantine/form";
import { memo } from "react";
import { IEmploymentHistorySectionForm } from "../../../hooks/useEmploymentHistoryForm";

interface Props {
  // form: UseFormReturnType<IEmploymentHistorySectionForm>,
  historySection: any
}

export const EmploymentHistorySection = memo(({historySection}: Props) => {
  console.log(historySection)
  return (
    <>
      <Grid>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Job Title"
            placeholder="e.g. Frontend Developer"
            // {...historySection.getInputProps('jobTitle')}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="Employer"
            placeholder="e.g. Frontend Developer"
            // {...historySection.getInputProps('employer')}
          />
        </Grid.Col>
        <Grid.Col span={3}>
        <MonthPickerInput
          label="Start date"
          placeholder="Pick date"
          // {...historySection.getInputProps('startDate')}
        />
        </Grid.Col>
        <Grid.Col span={3} >
          <MonthPickerInput
            label="End date"
            placeholder="Pick date"
            // {...historySection.getInputProps('endDate')}
          />
        </Grid.Col>
        <Grid.Col span={6}>
          <TextInput
            withAsterisk
            label="City"
            // {...historySection.getInputProps('city')}
          />
        </Grid.Col>
        <Grid.Col span={12} >
          <Textarea
            minRows={5}
            placeholder="e.g. Improved application performance with over 50%. Improved SEO and UX."
            label="Description"
            required
            // {...historySection.getInputProps('description')}
          />
        </Grid.Col>
      </Grid>
    </>
  )
})
