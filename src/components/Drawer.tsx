import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
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
        bg="gray.600"
        shadow="xl"
      >
        <DrawerBody
          overflowY="scroll"
          scrollBehavior="smooth"
          w="full"
          h="full"
        >
          <Flex flexDir="column" justify="flex-start">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map(
              () => (
                <Heading>LOGO</Heading>
              )
            )}
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Drawers;
