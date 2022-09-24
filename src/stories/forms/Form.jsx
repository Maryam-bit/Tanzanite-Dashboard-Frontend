import React from "react";
import { Center, Box, Button, FormControl, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";
import '../../assets/scss/main.scss';
import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types';


export const Form = ({onSubmit, setUserName, setEmail, setPassword, type, label}) => {
    return (
        <>
            <ChakraProvider>
                <Flex display='flex' alignItems='center' justifyContent='center' h='100%'>
                    <Center>
                        <Box p='6' borderWidth='1px' borderRadius='lg' boxShadow='md' >
                            <Center><Heading size='lg' mb="2">{label}</Heading></Center>
                            <Center>
                                <form onSubmit={onSubmit}>
                                    {
                                        type === "signup" ? 
                                        <FormControl>
                                            <FormLabel>User name</FormLabel>
                                            <Input required type='text' onChange={(e) => setUserName(e.target.value)} />
                                        </FormControl>
                                        : 
                                        <></>
                                    }
                                    <FormControl>
                                        <FormLabel>Email</FormLabel>
                                        <Input required type='email' onChange={(e) => setEmail(e.target.value)} />
                                    </FormControl>
                                    <FormControl>
                                        <FormLabel>Password</FormLabel>
                                        <Input required type='password' onChange={(e) => setPassword(e.target.value)} />
                                    </FormControl>
                            <Button colorScheme='blue' float='right' type="submit" my='3'>{label}</Button>
                                </form>
                            </Center>
                        </Box>
                    </Center>
                </Flex>
            </ChakraProvider>
        </>
    )
}

Form.propTypes = {
    label: PropTypes.string.isRequired,
    type:  PropTypes.oneOf(['signup', 'signin']),
}
