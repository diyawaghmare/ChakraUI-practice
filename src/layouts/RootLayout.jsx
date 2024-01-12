import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"

export default function RootLayout() {
  return (
    <Grid templateColumns="repeat(6,1fr)" bg="gray.150">
      <GridItem 
        as="aside" 
        colSpan={{base:6, md:2, lg:1}} 
        bg="purple.400" 
        minHeight={{lg:"100vh" }}
        p={{base:"20px", lg:"30px"}}>
        <Sidebar />
      </GridItem>

      <GridItem as="aside" colSpan={{base:6, md:4, lg:5}} p="40px">
        <Navbar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}
