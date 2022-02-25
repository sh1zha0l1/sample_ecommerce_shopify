import React, { useContext } from 'react'
import { ShopContext } from '../context/shopContext'
import { Link } from 'react-router-dom'

import { Badge, Box, Icon, Image,Flex} from "@chakra-ui/react"
import { MdShoppingBasket, MdDehaze } from "react-icons/md";


const NavBar = () => {
    const { openCart, openMenu, checkout } = useContext(ShopContext);

    return (
        <Flex background="#6d5e4c" flexDir="row" justifyContent="space-between" p="1rem">
            <Icon fill="white" cursor="pointer" onClick={() => openMenu()} as={MdDehaze} w={30} h={30}></Icon>
            <Link to="/"><Image src="https://i.imgur.com/H1y7oT3.png" w={300} h={100} /></Link>
            <Box>
                <Icon fill="white" cursor="pointer" onClick={() => openCart()} as={MdShoppingBasket} w={30} h={30} onClickCapture={()=>openCart}></Icon>
                <Badge backgroundColor="#grey" borderRadius="50%">{checkout?.lineItems?.length}</Badge>
            </Box>
        </Flex>
    )
}


export default NavBar
