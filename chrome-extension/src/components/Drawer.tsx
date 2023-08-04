import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  Heading,
  Select,
  VStack,
} from "@chakra-ui/react";
import "./scroll.css";

interface IDrawersProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawers = ({ isOpen, onClose }: IDrawersProps) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent
        borderTopEndRadius="2xl"
        borderBottomEndRadius="2xl"
        bg="white"
        shadow="xl"
      >
        <DrawerBody
          overflowY="scroll"
          scrollBehavior="smooth"
          w="full"
          h="full"
        >
          <Flex flexDir="column" justify="flex-start">
            <Flex justify="center" my={7}>
              <Heading textAlign="center" >LOGO</Heading>
            </Flex>
            <VStack w="full" align="flex-start" >
              <Heading fontSize="lg" fontWeight="semibold">Backgound</Heading>
              <Select bg="blackAlpha.200" border="none" outline="none" rounded="md">
                <option value="solid_color">Solid Color</option>
                <option value="solid_color">Color Gradient</option>
                <option value="solid_color">Upload Image</option>
                <option value="solid_color">Solid Color</option>
              </Select>
            </VStack>
            <Flex bg="blackAlpha.200" w="full" h="full" p={4}>
              <Text fontSize="2xl" fontWeight="semibold">Color Gradient</Text>
            </Flex>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawers;
