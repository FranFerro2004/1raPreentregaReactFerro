import React, { useState, forwardRef, useImperativeHandle } from 'react'
import CartWidget from './CartWidget'
import { Flex, Box, Spacer, MenuButton, MenuList, MenuItem, Menu, Center, Square} from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import filtrarCategoria from '../App'


const NavMenu = ({categorias, filtrarCategoria}) => {
    return (
        <div>   

            <Flex>
            <Box p='4' bg='green.400'>
                Shop
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Menu>
                    <MenuButton>
                        Tipo de productos
                    </MenuButton>
                        <MenuList id="categoria">
                            {categorias.map((c, index) => ( <MenuItem onClick= {filtrarCategoria(c)} key={index}>{c}</MenuItem> ))}
                        </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <Input placeholder='Que productos buscas?' />
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
                <CartWidget /> 
            </Box>
            </Flex>
    
        
        </div>
        
        
    )
} 

export default NavMenu