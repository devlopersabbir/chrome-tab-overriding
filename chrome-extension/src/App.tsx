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
import moment from "moment";

const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  return (
    <>
      <Flex
        bgImg={
          "https://source.unsplash.com/random/count=1&query=moon&fit=crop&w=1920"
        }
        // opacity="0.7"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        w="full"
        h="100vh"
        pos="relative"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        bgColor="#1a202c70"
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
              <Icon
                onClick={() => document.documentElement.requestFullscreen()}
                color="white"
                fontSize="2xl"
                as={AiOutlineFullscreenExit}
              />
            </HStack>
          ) : null}
        </Flex>
        <VStack color="white">
          <Heading fontSize="8xl">{moment().format("LT")}</Heading>
          <Heading fontSize="4xl">Good Afternoon</Heading>
          <Heading fontSize="4xl">Write something fun</Heading>
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
          <Icon
            fontSize="md"
            color="white"
            cursor="pointer"
            as={AiOutlineLeft}
          />
          <Icon
            fontSize="md"
            color="white"
            cursor="pointer"
            as={AiOutlinePlayCircle}
          />
          <Icon
            fontSize="md"
            color="white"
            cursor="pointer"
            as={AiOutlineRight}
          />
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
          <Text fontSize="lg" color="white">
            Photo, Vadim Sherbakov, Unsplash
          </Text>
        </Flex>
      </Flex>
      <Drawers isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default App;
