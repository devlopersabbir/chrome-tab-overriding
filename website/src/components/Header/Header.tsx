import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Stack>
        <Heading>LOGO</Heading>
        <Text as={Link} to="/">
          Home
        </Text>
      </Stack>
    </Container>
  );
};

export default Header;
