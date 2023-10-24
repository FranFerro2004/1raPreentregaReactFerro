import React from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button,  } from '@chakra-ui/react'

const ProductDetail = ({productos}) => {
    const { id } = useParams()

    return (
        <Card maxW='sm'>
            <CardBody>
                <Image src={''}  />
                <Stack mt='6' spacing='5'>
                <Heading size='md'>{''}</Heading>
                
                <Text color='blue.600' fontSize='2xl'>
                    
                </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='2'>
                <Button variant='solid' colorScheme='blue'>
                    Ver Detalles
                </Button>
                <Button variant='ghost' colorScheme='blue'>
                    Agregar al carrito
                </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>  
        )
}

export default ProductDetail