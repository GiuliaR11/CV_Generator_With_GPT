import { Card, SimpleGrid, Image, Group, Badge, Button, Text, Container, createStyles, Stack } from "@mantine/core";
import { Dispatch, SetStateAction } from "react";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  selected: {
    border: '0.5px solid',
    borderColor: theme.colors.blue[3],
  }
}))

interface TemplateViewerProps {
  selectedTemplate: string
  setSelectedTemplate: Dispatch<SetStateAction<any>>
}

export function TemplateViewer({setSelectedTemplate, selectedTemplate}: TemplateViewerProps) {
  const { classes } = useStyles()

  const templates = [
    {
      title: 'Sydney',
      tags: ['modern', 'bold', 'colorful'],
      availableInColors: true,
      description: 'A robust stripe of color with a spacey dimension for work experience'
    },
    {
      title: 'Vancouver',
      tags: ['modern', 'pattern'],
      availableInColors: false,
      description: 'A merry, patterned background adds charm to a wide column design.'
    },
    {
      title: 'Oslo',
      tags: ['modern', 'elegant'],
      availableInColors: true,
      description: 'Refined header with elegant wide column format.'
    },
    {
      title: 'Rio',
      tags: ['modern', 'energetic', 'creative'],
      availableInColors: false,
      description: 'Fluid and energetic, this template makes a statement with creativity and style.'
    },
    {
      title: 'Singapore',
      tags: ['classic', 'monochrome'],
      availableInColors: false,
      description: 'Streamlined layout with modern font and plenty of open space.'
    },
    {
      title: 'Madrid',
      tags: ['accent', 'colorful'],
      availableInColors: true,
      description: 'A show-stopping header complimented by strong section accents.'
    },
  ]

  return (
    <Container className={classes.container}>
      <SimpleGrid cols={3} spacing="xl">
        {templates.map(template =>
          <Card shadow="sm" padding="lg" radius="md" className={selectedTemplate === template.title ? classes.selected : ''}>
            <Card.Section>
              <Image
                src="https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"
                height={300}
                alt="Norway"
              />
            </Card.Section>
                <Stack mt="md">
                  <Text weight={500}>{template.title}</Text>
                  <Group mb="xs">
                    {template.tags.map(tag => (
                      <Badge color="pink" variant="light">
                        {tag}
                      </Badge>
                    ))}            
                  </Group>
                </Stack>

                <Text size="sm" color="dimmed">
                  {template.description}
                </Text>

              <Button 
                variant="light" 
                color="blue" 
                fullWidth 
                mt="md" 
                radius="md"
                disabled={!['Sydney', 'Vancouver', 'Oslo'].includes(template.title)}
                onClick={() => setSelectedTemplate(template.title)}
              >
                Choose template
              </Button>
          </Card>
        )}
      </SimpleGrid>
    </Container>
  )
}