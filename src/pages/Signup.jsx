import React from "react";
import { Center, Box, Button, FormControl, FormLabel, Input, Flex } from "@chakra-ui/react";

export const Signup = () => {
    return (
        <>
        <Flex display='flex' alignItems='center' justifyContent='center' h='100%'>
            <Center>
                <Box p='6' borderWidth='1px' borderRadius='lg' boxShadow='md'>
                    <Center>
                        <form>
                            <FormControl>
                                <FormLabel>Full Name</FormLabel>
                                <Input type='text' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input type='email' />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type='password' />
                            </FormControl>
                        </form>
                    </Center>
                    <Button colorScheme='blue' float='right' type="submit" my='3'>Signup</Button>
                </Box>
            </Center>
        </Flex>
        </>
    )
}