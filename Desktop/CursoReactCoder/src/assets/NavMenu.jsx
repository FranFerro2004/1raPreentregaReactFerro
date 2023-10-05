import React from 'react'
import CartWidget from './CartWidget'
import { Flex, Box, Spacer, MenuButton, MenuList, MenuItem, Menu, Center, Square} from '@chakra-ui/react'


const NavMenu = () => {
    return (
        <div>   

       {/*  <Flex>
            <Box p='4' bg='red.400'>
                <CartWidget /> 
            </Box>
        <Spacer />
            <Box>
                <Menu>
                    <MenuButton>
                        Tipo de productos
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Ropa</MenuItem>
                        <MenuItem>Zapatillas</MenuItem>
                        <MenuItem>Accesorios</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        <Spacer />
            <Box p='4' bg='red.400'>
                <p>E-Commerce</p>
            </Box>
        </Flex>  
        
        </div> */}


<Flex color='white'>
<Center w='100px' bg='green.500'>
    <CartWidget /> 
</Center>
<Square bg='blue.500' size='150px'>
<p>E-Commerce</p>
</Square>
<Box flex='1' bg='tomato'>
<Menu>
    <MenuButton>
        Tipo de productos
    </MenuButton>
    <MenuList>
        <MenuItem>Ropa</MenuItem>
        <MenuItem>Zapatillas</MenuItem>
        <MenuItem>Accesorios</MenuItem>
    </MenuList>
</Menu>
</Box>
</Flex>
</div>

    )
}

export default NavMenu