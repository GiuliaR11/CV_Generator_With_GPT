import { Container, SimpleGrid, Card, Image, Button, createStyles, Text, Stack } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCVsByUser } from "../services/UserService";
import { CV } from "../models/CV";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  selected: {
    border: '0.5px solid',
    borderColor: theme.colors.blue[3],
  }
}))

export function MyCVsPage() {
  const [cvList, setCvList] = useState<CV[]>([])

  useEffect(() => {
    getCVsByUser('1')
    .then((res) => {
      setCvList(res)
    })
    
  }, []);


  const { classes } = useStyles()

  return (
    <Container className={classes.container}>
      <Stack align="center">
        <SimpleGrid cols={3} spacing="xl">
          {cvList.map(cv =>
            <Card shadow="sm" padding="lg" radius="md">
              <Card.Section>
                <Stack mt="md" align="center">
                    <Text weight={500} color="blue">{cv.name}</Text>
                  </Stack>
                <Image
                  src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
                  height={300}
                  alt="Norway"
                />
              </Card.Section>
              <Link to={`/my-cvs/${cv.id}`}>
                <Button 
                  variant="light" 
                  color="blue" 
                  fullWidth 
                  mt="md" 
                  radius="md"
                >
                  View CV
                </Button>
              </Link>
            </Card>
          )}
        </SimpleGrid>
        <Link to="/cv">
          <Button>
            Create CV
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}