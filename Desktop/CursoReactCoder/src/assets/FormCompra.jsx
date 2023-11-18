import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, Input, FormHelperText, WrapItem, Button } from '@chakra-ui/react';

const Form = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [nombreConfirmado, setNombreConfirmado] = useState('')
    const [emailConfirmado, setEmailConfirmado] = useState('')

    const handleEnviarClick = () => {
        setNombreConfirmado(nombre)
        setEmailConfirmado(email)
    
    };

    

    return (
        <>
            <FormControl>
                <FormLabel>Nombre</FormLabel>
                <Input type='text' id="formNombre" onChange={(e) => setNombre(e.target.value)} />
                <FormHelperText>Escribe tu nombre completo</FormHelperText>
            </FormControl>

            <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input type='email' id="formEmail" onChange={(e) => setEmail(e.target.value)} />
                <FormHelperText>Por favor introduce tu correo electrónico.</FormHelperText>
            </FormControl>

            <WrapItem>
                <Button colorScheme='gray' id="botonEnviar" onClick={handleEnviarClick}>
                    Enviar
                </Button>
            </WrapItem>
        </>
    );
};

export default Form;
