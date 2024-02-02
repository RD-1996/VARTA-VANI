import React, { useState } from 'react';
import { VStack, Input, FormControl, FormLabel, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon, AttachmentIcon } from '@chakra-ui/icons'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState("");


    const handleClick = () => {
        setShow(!show);
    }

    const postDetails = (pics) => {

    }

    const submitHandler = () => {

    }
    return (
        <VStack spacing="4px">
            <FormControl id='first-name' isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id='password' isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                    <Input
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
            <FormControl id='confirm-password' isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                    <Input
                        type={show ? "text" : 'password'}
                        placeholder='****'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement>
                        <Button onClick={handleClick}>
                            {show ? <ViewIcon /> : <ViewOffIcon />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id='pic'>
                <FormLabel>Uplaod Your Picture</FormLabel>
                <Input
                type='file'
                accept='image/*'
                    placeholder='Enter Your Email'
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button 
            colorScheme='blue'
            w="100%"
            style={{marginTop:10}}
            onClick={submitHandler}
            >
                SignUp
            </Button>

        </VStack>
    )
}

export default Signup