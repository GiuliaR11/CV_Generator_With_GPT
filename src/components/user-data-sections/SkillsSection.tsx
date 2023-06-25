import { ActionIcon, Group, MultiSelect, Paper, Title } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { memo, useState } from "react";
import { Award, Language } from "tabler-icons-react";

interface Props {
  form: UseFormReturnType<any>
  name: string
}

export const SkillsSection = memo(({form, name}: Props) => {
  const keyName = name === 'Skills' ? 'skills' : 'languages';
  const [skillsList, setSkillsList] = useState<string[] | any[]>(form.values[keyName])

  const getDescription = () => {
    return name === 'Skills'
      ? 'Add 5 important skills that show you fit the position. Make sure they match the key skills mentioned in the job listing (especially when applying via an online system).'
      : 'Add all the languages you know' 
  }

  const getLabel = () => {
    return name === 'Skills'
      ? 'Type a skill'
      : 'Type a language'
  }
  return (
    <>
      <Group>
          <ActionIcon color="blue">
            {name === 'Skills' ? <Award/> : <Language/>}
          </ActionIcon>
          <Title order={4}>{name}</Title>
        </Group>
        <span>
          {getDescription()}
        </span>
        <MultiSelect
          label={getLabel()}
          data={form.getInputProps(keyName).value}
          placeholder="Select items"
          searchable
          creatable
          getCreateLabel={(query) => `+ Add ${query}`}
          onCreate={(query) => {
            setSkillsList((current) => [...current, query]);
            return query;
          }}
          {...form.getInputProps(keyName)}
    />
    </>
  )
})