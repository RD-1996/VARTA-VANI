import React, { useState } from 'react'
import { Box, Button, Menu, MenuButton, Tooltip, Avatar, MenuList, MenuItem, MenuDivider } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { BellIcon, ChevronDownIcon, Search2Icon } from '@chakra-ui/icons'
import { ChatState } from '../../Context/ChatProvider';
import ProfileModal from './ProfileModal';
import { useNavigate } from 'react-router-dom';

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const { user } = ChatState();

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/")
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent='space-between'
        alignItems="center"
        bg="white"
        w="100%"
        p="2px 5px 2px 5px"
        borderWidth="1px"
        borderRadius="7px"
      >
        <Tooltip hasArrow label='Search users to chat' >
          <Button variant="ghost">
            <Search2Icon></Search2Icon>
            <Text display={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>
        <Text fontSize="2xl" fontFamily="work sans" textAlign={"center"}>
          Varta-Vani
        </Text>
        <div>
          <Menu>
            <MenuButton p={1}>
              <BellIcon fontSize={"2xl"} m="1px" />
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" name={user.name} src={user.pic} />
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem >My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem onClick={logoutHandler}>Log Out</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  )
}

export default SideDrawer