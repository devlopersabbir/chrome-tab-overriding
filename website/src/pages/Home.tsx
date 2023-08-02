import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Home = () => {
  return (
    <Flex bg="gray.500" w="full" flex={6}>
      <Flex flex={2} bg="blue.400" w="full">
        <Heading>hello left</Heading>
      </Flex>
      <Flex flex={4} bg="gray.300" w="full">
        <Heading>Hello right</Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
