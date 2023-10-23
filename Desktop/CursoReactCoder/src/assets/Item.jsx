import React from 'react'
import ItemList from './ItemList'
import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button,  } from '@chakra-ui/react'

const Item = ({nombre, descripcion, precio, imagen}) => {
return (
    <>    
    <Card maxW='sm'>
      <CardBody>
        <Image src={imagen}  />
        <Stack mt='6' spacing='5'>
          <Heading size='md'>{nombre}</Heading>
          <Text>
            {descripcion}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {precio}
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
    </>
  )
} 

export default Item