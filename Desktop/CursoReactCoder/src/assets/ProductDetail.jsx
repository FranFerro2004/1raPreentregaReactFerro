import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button,  } from '@chakra-ui/react'


const ProductDetail = ({id, nombre, descripcion, precio, imagen}) => {

    return (
        <Card maxW="sm">
            <CardBody>
            <Image src={imagen} />
                <Stack mt="6" spacing="5">
                    <Heading size="md">{nombre}</Heading>
                    <Text color='blue.600' fontSize='2xl'>
                        {precio}
                    </Text>
                    <Text color="blue.600" fontSize="2xl">
                        {descripcion}
                    </Text>
                </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="ghost" colorScheme="blue">
                    Agregar al carrito
                    </Button>
                </ButtonGroup>
                </CardFooter>
            </Card>
    );
};

export default ProductDetail;


