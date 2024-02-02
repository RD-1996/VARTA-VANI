import React, { useState } from 'react';
import { VStack, Input, FormControl, FormLabel, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, AttachmentIcon } from '@chakra-ui/icons'

const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const submitHandler = () => {

    }


    const handleClick = () => {
        setShow(!show);
    }

    return (
        <VStack spacing="4px">

            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                value={email}
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
                    value={password}
                        type={show ? "text" : 'password'}
                        placeholder='****'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button onClick={handleClick}>
                            {show ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button
                colorScheme='blue'
                w="100%"
                style={{ marginTop: 10 }}
                onClick={submitHandler}
            >
                LogIn
            </Button>
            <Button
                variant="solid"
                colorScheme='red'
                w="100%"
                style={{ marginTop: 10 }}
                onClick={()=>{
                    setEmail("guest@example.com");
                    setPassword("123456")
                }}
            >
                Get Get User Credentials
            </Button>

        </VStack>
    )
}

export default Login