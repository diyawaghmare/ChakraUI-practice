import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, Flex, HStack, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useLoaderData } from "react-router-dom";

export default function Dashboard() {
  const tasks = useLoaderData()

  const boxStyles={
    p:"10px",
    bgColor:"purple.200",
    color:"white",
    m:"10px",
    textAlign:"center",
    ':hover':{
      bg:"blue.200"
    }
  }

  return (
      <SimpleGrid minChildWidth="300px" spacing={10}>
        {tasks && tasks.map(task => (
          <Card key={task.id} borderTop="8px" borderColor="purple.400">
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as="h3" size="sm">{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>

            <CardBody color="gray.500">
              <Text>{task.description}</Text>
            </CardBody>

            <Divider borderColor="gray.300" />
            
            <CardFooter color="gray.500">
              <HStack>
                <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
                <Button bg="orange.300" leftIcon={<EditIcon />}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks")
  return res.json()
}