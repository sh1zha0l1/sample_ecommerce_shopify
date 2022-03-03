import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from "@chakra-ui/react"

const Footer = () => {
  return (
    <Box backgroundColor="#6d5e4c">
      <Grid templateColumns={["repeat(1, 1fr)","repeat(3, 1fr)"]} color="white" fontWeight='bold'>
        <Image src="https://i.imgur.com/H1y7oT3.png" />
        <VStack p="2rem">
          <Link to="/">Social1</Link>
          <Link to="/">Social2</Link>
          <Link to="/">Social3</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Clearance</Link>
        </VStack>
      </Grid>
      <Box>
        <Text textAlign="center" color="white" w="100%" borderTop="1px solid white" p="1rem">
          © Copyright lee
        </Text>
      </Box>
    </Box>
  )
}

export default Footer