import React, { useState, useEffect } from 'react';
import { Flex, Box, Spacer, MenuButton, MenuList, MenuItem, Menu, Input } from '@chakra-ui/react';


const NavMenu = ({ categorias, filtrarCategoria, actualizarBusqueda }) => {
    const [categoriaParaFiltrar, setCategoriaParaFiltrar] = useState('Todas');
    const [busquedaParaFiltrar, setBusquedaParaFiltrar] = useState('');

    useEffect(() => {
        filtrarCategoria(categoriaParaFiltrar);
    }, [categoriaParaFiltrar]);

    useEffect(() => {        
        actualizarBusqueda(busquedaParaFiltrar);
    }, [busquedaParaFiltrar]);

    return (
        <div>
        <Flex>
            <Box p='4' bg='green.400'>
            Shop
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
            <Menu>
                <MenuButton>{categoriaParaFiltrar}</MenuButton>
                <MenuList id='categoria'>
                {categorias.map((c, index) => (
                    <MenuItem key={index} onClick={() => setCategoriaParaFiltrar(c)}>
                    {c}
                    </MenuItem>
                ))}
                <MenuItem onClick={() => setCategoriaParaFiltrar('Todas')}>Todas</MenuItem>
                </MenuList>
            </Menu>
            </Box>
            <Spacer />
            <Box p='4' bg='green.400'>
            <Input
                onChange={(e) => setBusquedaParaFiltrar(e.target.value)}
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

