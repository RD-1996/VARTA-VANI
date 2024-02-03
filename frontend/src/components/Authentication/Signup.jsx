import React, { useState } from 'react';
import { VStack, Input, FormControl, FormLabel, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [pic, setPic] = useState("");
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const navigate = useNavigate();

    const handleClick = () => {
        setShow(!show);
    }

    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: 'Please select an Image',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "dunx0torv");
            fetch("https://api.cloudinary.com/v1_1/dunx0torv/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    setPic(data.url.toString());
                    console.log(data);
                    setLoading(false);
                })
                .catch((err) => {
                    console.log("image error :" + err);
                    setLoading(false);
                });
        }
        else {
            toast({
                title: 'Please select an Image',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    };

    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmPassword) {
            toast({
                title: 'Please fill all the field',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        if (password !== confirmPassword) {
            toast({
                title: 'Passwords do not match',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };
            const { data } = await axios.post("/api/user",
                {
                    name,
                    email,
                    password,
                    pic
                }, config);
            toast({
                title: 'You are successfully registered',
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            localStorage.setItem("userInfo", JSON.stringify(data));

            setLoading(false);
            navigate("/chats");
        } catch (error) {
            toast({
                title: 'Something went wrong',
                description: error.response.data.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
        }

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
            <FormControl id='password' isRequired>
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
                style={{ marginTop: 10 }}
                onClick={submitHandler}
                isLoading={loading}
            >
                SignUp
            </Button>
        </VStack>
    )
}

export default Signup