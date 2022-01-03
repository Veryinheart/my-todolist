import React from "react";
import { Flex, Center, Text, Spacer, Square } from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";

const Header = () => {

    return (
        <>
            <Flex color="white">
                <Center w="100px" bg="blue.500" >
                    <Text>
                        <Link to="/todo">todo</Link>
                    </Text>

                </Center>
                <Square w="100px" bg="blue.500" size="50px">
                    <Text>
                        <Link to="/about">about</Link>
                    </Text>
                </Square>
                <Spacer bg="blue.500" />
            </Flex>
            <Spacer />
            <Outlet />
        </>
    )
}

export default Header
