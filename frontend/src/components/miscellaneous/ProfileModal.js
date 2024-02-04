import React from 'react';
import { IconButton, useDisclosure } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Image,
    Text
} from '@chakra-ui/react'

const ProfileModal = ({ user, children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            {children ? <span onClick={onOpen}>{children}</span> : (
                <IconButton
                    display={{ base: "flex" }}
                    icon={<ViewIcon />}
                    onClick={onOpen}
                />

            )}
            <Modal size="sm" isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                    fontSize="30px"
                    fontFamily="work sans"
                    display="flex"
                    justifyContent="center"
                    >{user.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody 
                    display="flex"
                    flexDir="column"
                    alignItems="center"
                    justifyContent="space-between"
                    >
                        <Image 
                        borderRadius="50%"
                        boxSize="160px"
                        w="180px"
                        src={user.pic}
                        alt={user.name}
                        />
                       <Text m={3}>Email : {user.email}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ProfileModal