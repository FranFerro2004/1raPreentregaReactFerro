import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContex';
import { Card, Image, Stack, CardBody, Text, CardFooter, Button, Heading } from '@chakra-ui/react';

const Cart = () => {
    const { carrito, eliminarDelCarrito } = useContext(CartContext);

    const eliminarDeContext = (nombre) => () => eliminarDelCarrito(nombre);

    useEffect(() => {
        console.log(carrito);
    }, [carrito]);

    return (
        <div>
            {carrito?.map((p) => {
                return (
                    <Card key={p.id} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                        <Image objectFit='cover' maxW={{ base: '100%', sm: '200px' }} src={p.imagen} />

                        <Stack>
                            <CardBody>
                                <Heading size='md'>{p.nombre}</Heading>
                                <Text py='2'>{p.descripcion}</Text>
                            </CardBody>

                            <CardFooter>
                                <Button variant='solid' colorScheme='blue' onClick={eliminarDeContext(p.nombre)}>
                                    Eliminar Producto
                                </Button>

                                <Text>x{p.cantidad}</Text>
                            </CardFooter>
                        </Stack>
                    </Card>
                );
            })}
        </div>
    );
};

export default Cart;

