import React, { useState, useEffect } from 'react';
import { Flex, Box, Spacer, MenuButton, MenuList, MenuItem, Menu, Input } from '@chakra-ui/react';
import ItemListContainer from './ItemListContainer';
import { Link, useParams } from 'react-router-dom';

const NavMenu = ({productos}) => {
    const categorias = ["electronics", "jewelery", "men's clothing", "women's clothing"];
    const {category} = useParams()
    console.log(productos)
    useEffect(() => {
        console.log(category)
    }, [category])

    return (
        <div>
            <Flex>
                <Box p='4' bg='green.400'>  
                    <Link to={'/'}> 
                        Shop
                    </Link>
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    <Menu>
                        <MenuButton>
                            Categorías
                        </MenuButton>
                        <MenuList id='categoria'>
                            {categorias.map((c, index) => (
                                <MenuItem key={index}>
                                    <Link to={'/category/${c}'}>
                                        {c}
                                    </Link>                                       
                                </MenuItem>
                            ))}
                                <MenuItem>Todas</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                    <Input
                        placeholder='Qué productos buscas?'
                    />
                </Box>
                <Spacer />
                <Box p='4' bg='green.400'>
                </Box>
            </Flex>
        </div>
    );
};

export default NavMenu;


