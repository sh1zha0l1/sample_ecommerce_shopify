import React from 'react'
import { Box, Button, Text, Image, Center } from "@chakra-ui/react"

const Hero = () => {
  return (
    <Box backgroundColor="black" w="100%" position="relative" h="70vh">
      <Image className="fade-in" h="100%" m="auto" objectFit="contain" objectPosition={['top', 'center']} src="https://cdn11.bigcommerce.com/s-yck5k/product_images/uploaded_images/home-page-slide-december.jpg?t=1638535938&_gl=1*ow6pzr*_ga*MTYyMDk2MjI1OS4xNjIyNTQ3Njky*_ga_WS2VZYPC6G*MTYzODUzMzA3My40MDkuMS4xNjM4NTM1OTUxLjU3" />
      <Text className="tracking-in-expand-fwd" position="absolute" bottom="20%" w="100%" textAlign="center" color="white" fontWeight="bold" fontSize="4rem">
        Experience our new store! Free delivery over 50€
      </Text>
      <Center>
        <Button w="10rem" backgroundColor="#6d5e4c" color="white" _hover={{ opacity: '70%' }} position="absolute" bottom="10%">
          Shop Now
        </Button>
      </Center>
    </Box>
  )
}

export default Hero