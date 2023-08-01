import {
  Flex,
  HStack,
  Heading,
  Icon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdSettings } from "react-icons/md";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineFullscreenExit,
  AiOutlineRight,
  AiOutlineLeft,
  AiOutlinePlayCircle,
} from "react-icons/ai";
import Drawers from "./components/Drawer";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  return (
    <>
      <Flex
        w="full"
        h="100vh"
        pos="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        // bg="gray.800"
        bg="#1a202c33"
      >
        {/* for drawer */}
        <Flex
          position="absolute"
          top={2}
          left={5}
          gap={3}
          p={2}
          rounded="full"
          bg={!isShow ? "transparent" : "gray.600"}
          transition="0.3s"
          onMouseEnter={() => setIsShow(true)}
          onMouseLeave={() => setIsShow(false)}
        >
          <Icon onClick={onOpen} color="white" fontSize="2xl" as={MdSettings} />

          {isShow ? (
            <HStack transition="0.3s">
              <Icon
                onClick={() => setIsEyeOpen(true)}
                color="white"
                fontSize="2xl"
                as={isEyeOpen ? AiOutlineEyeInvisible : AiOutlineEye}
              />
              <Icon color="white" fontSize="2xl" as={AiOutlineFullscreenExit} />
            </HStack>
          ) : null}
        </Flex>
        <VStack color="white">
          <Heading>20:30</Heading>
          <Heading>Write something fun</Heading>
          <Heading>Good Afternoon</Heading>
        </VStack>
        {/* bottom bar */}
        <Flex
          justify="center"
          align="center"
          flexDirection="row"
          gap={2}
          pos="absolute"
          bottom={4}
          w="full"
          m="auto"
        >
          <Icon fontSize="md" cursor="pointer" as={AiOutlineLeft} />
          <Icon fontSize="md" cursor="pointer" as={AiOutlinePlayCircle} />
          <Icon fontSize="md" cursor="pointer" as={AiOutlineRight} />
        </Flex>
        {/* photo details */}
        <Flex
          justify="center"
          align="center"
          flexDirection="row"
          gap={2}
          pos="absolute"
          bottom={4}
          left={3}
        >
          <Text>Photo, Vadim Sherbakov, Unsplash</Text>
        </Flex>
      </Flex>
      <Drawers isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
