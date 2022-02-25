import React, { useContext, useEffect } from 'react';
import { Link, resolvePath } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Text, Image } from '@chakra-ui/react';
import Hero from '../components/Hero';
import RichText from '../components/RichText';
import ImageWithText from '../components/ImageWithText';



const Home = () => {

    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {

        }
    }, [fetchAllProducts])


    if (!products) return <div>loading...</div>
    console.log(products);
    return (
        <Box>
            <Hero />
            <Grid templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}>
                {products.map(product => (
                    <Link to={`/products/${product.handle}`} key={product.id} >
                        <Box _hover={{ opacity: '80%' }} textAlign="center" position="relative">
                            <Image
                                src={product.images[0].src} h="400" padding="10"
                            />
                            <Text fontWeight="bold" position="absolute" bottom="15%" w="100%">{product.title}</Text>
                            <Text color="gray.500" position="absolute" bottom="5%" w="100%">${product.variants[0].price}</Text>
                        </Box>
                    </Link>
                ))}
            </Grid>
            <RichText heading="Treat yourself!" />
            <ImageWithText
                button
                image="https://i.ytimg.com/vi/Up9f-VM7kEg/maxresdefault.jpg"
                heading="Heading"
                text="Airsoft is a military simulation sport where players participate in mock combat with authentic military-style weapons and tactics. " />
            <ImageWithText
                reverse
                button
                image="https://outdoorzone.ie/wp-content/uploads/2019/03/Glock-18-evolution-airsoft-2.jpg"
                heading="Second Heading"
                text="Unlike paintball, airsoft uses 6mm round BBs made of hard plastic. The guns used are full scale replicas of real world weapons. ... They also shoot a lower velocity than gas or AEG guns" />
        </Box>
    )
}

export default Home