import { Flex, IconButton, useColorMode } from "@chakra-ui/react";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Toggle = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex pos="fixed" bottom={10} right={10}>
      <IconButton
        transitionDuration="0.3s"
        transition="ease-in-out"
        fontSize="2xl"
        aria-label="toggle"
        icon={colorMode === "dark" ? <BsSunFill /> : <BsMoonStarsFill />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default Toggle;
