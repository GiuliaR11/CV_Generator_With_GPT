import { Container, SimpleGrid, Card, Image, Button, createStyles, Text, Stack, ActionIcon, Group } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCVsByUser } from "../services/UserService";
import { CV } from "../models/CV";
import { Trash } from "tabler-icons-react";
import { deleteCV } from "../services/CVService";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth-slice";

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
  const auth = useSelector(selectAuth);

  useEffect(() => {
    getCVsByUser(auth.user?.id)
    .then((res) => {
      setCvList(res)
    })
    
  }, []);

  const handleDeleteCV = (id: string) => {
    deleteCV(id).then(() => {
      getCVsByUser(auth.user?.id)
      .then((res) => {
        setCvList(res)
      })
    })
  }


  const { classes } = useStyles()

  return (
    <Container className={classes.container}>
      <Stack align="center">
        <SimpleGrid cols={3} spacing="xl">
          {cvList.map(cv =>
            <Card shadow="sm" padding="lg" radius="md">
              <Card.Section>
                <Stack mt="md" align="center">
                  <Group>
                    <Text weight={500} color="blue">{cv.name}</Text>
                    <ActionIcon color="red" onClick={() => handleDeleteCV(cv.id)}>
                      <Trash/>
                    </ActionIcon>
                  </Group>

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