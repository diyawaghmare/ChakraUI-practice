import {List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import {EmailIcon, ChatIcon, StarIcon, CheckCircleIcon, WarningIcon} from "@chakra-ui/icons";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{color:"white", bg:"purple.400"}}>Account Info</Tab>
        <Tab _selected={{color:"white", bg:"purple.400"}}>Task History</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: mario@netninja.dev
            </ListItem>

            <ListItem>
              <ListIcon as={ChatIcon} />
              Chat with Mario
            </ListItem>

            <ListItem>
              <ListIcon as={StarIcon} />
              I don't know what this is for
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem Ipsum
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem Ipsum
            </ListItem>

            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Lorem Ipsum
            </ListItem>

            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              Lorem Ipsum
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}
