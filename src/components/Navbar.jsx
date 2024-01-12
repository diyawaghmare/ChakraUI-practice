import {Heading, Text, Flex, Box, Button, Spacer, HStack, useToast, Avatar, AvatarBadge} from "@chakra-ui/react";
import {UnlockIcon} from "@chakra-ui/icons";

export default function Navbar() {
  const toast = useToast()

  const showToast = () => {
    toast({
      title: "Logged out",
      description: "Successfully logged out",
      duration: 5000,
      isClosable: true,
      status: "success",
      position: "top",
      icon: <UnlockIcon />
    })
  }
  return (
    <Flex as="nav" p="10px" mb="40px" alignItems="center">
        <Heading as="h1">Chakra Tasks</Heading>
        <Spacer />

        <HStack spacing="20px">
            <Avatar name="mario" bg="purple.400" src="/img/mario.png">
              <AvatarBadge bg="teal.500" width="1.3em">
                <Text fontSize="xs" color="white">3</Text>
              </AvatarBadge>
            </Avatar>
            <Text>mario@netninja.dev</Text>
            <Button colorScheme="purple" onClick={showToast}>Logout</Button>
        </HStack>
    </Flex>
  )
}

