import { Container } from "@chakra-ui/react";
import React from "react";

type ILayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container
      maxW="container.xl"
      px={[1, 2, 3, 4]}
      mx="auto"
      w="full"
      h="auto"
      py={[1, 2, 3, 10]}
    >
      {children}
    </Container>
  );
};

export default Layout;
