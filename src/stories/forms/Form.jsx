import React from "react";
import { Center, Box, FormControl, FormLabel, Input, Flex, Heading } from "@chakra-ui/react";
import '../../assets/scss/main.scss';
import { ChakraProvider } from '@chakra-ui/react'
import PropTypes from 'prop-types';
import { TheButton } from '../button/Button.jsx';

export const Form = ({onSubmit, setUserName, setEmail, setPassword, type, label}) => {
    return (
        <>
            <ChakraProvider>
                <Flex display='flex' alignItems='center' justifyContent='center' h='100%'>
                    <Center>
                        <Box p='6' borderWidth='1px' borderRadius='lg' boxShadow='md' >
                            <Center><Heading className="text-xlg" mb="2">{label}</Heading></Center>
                            <Center>
                                <form onSubmit={onSubmit}>
                                    {
                                        type === "signup" ? 
                                        <FormControl>
                                            <FormLabel className="text-sm" mt='3'>User name</FormLabel>
                                            <Input required type='text' onChange={(e) => setUserName(e.target.value)} />
                                        </FormControl>
                                        : 
                                        <></>
                                    }
                                    <FormControl>
                                        <FormLabel  className="text-sm" mt='3'>Email</FormLabel>
                                        <Input required type='email' onChange={(e) => setEmail(e.target.value)} />
                                    </FormControl>

                                    <FormControl>
                                        <FormLabel  className="text-sm" mt='3'>Password</FormLabel>
                                        <Input required type='password' onChange={(e) => setPassword(e.target.value)} />
                                    </FormControl>
                                    <TheButton label={label} type='submit' float="right" my="3" />
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
