import {
  Container,
  Heading,
  Icon,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LuTwitter } from "react-icons/lu";

const Header = () => {
  return (
    <Container maxW="container.sm" m="auto">
      <Stack flexDir="row" gap={5} alignItems="center">
        <Heading as={Link} to="/">
          LOGO
        </Heading>
        <Text as={Link} to="/" fontSize="2xl" fontWeight="semibold">
          Home
        </Text>
        <Text as={Link} to="/updates" fontSize="2xl" fontWeight="semibold">
          Updates
        </Text>
        <Text as={Link} to="/Supports" fontSize="2xl" fontWeight="semibold">
          Supports
        </Text>
        <IconButton
          alignItems="center"
          justifyContent="center"
          fontSize="4xl"
          variant="unstyled"
          aria-label="twitter-btn"
          icon={<LuTwitter />}
          as={Link}
          to="https://twitter.com/devlopersabbir"
          target="_blank"
        />
      </Stack>
    </Container>
  );
};

export default Header;
