import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { MdSettings } from "react-icons/md";

const App = () => {
  return (
    <Flex
      w="full"
      h="100vh"
      pos="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="gray.800"
    >
      {/* for drawer */}
      <HStack position="absolute" top={2} left={5}>
        <IconButton
          aria-label="setttings"
          variant="unstyled"
          color="white"
          fontSize="2xl"
          icon={<MdSettings />}
        />
      </HStack>
      <Heading>20:30</Heading>
      <Heading>Write something fun</Heading>
      <Heading>Good Afternoon</Heading>
    </Flex>
  );
};

export default App;
