import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { LuChrome } from "react-icons/lu";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <Flex
        w="full"
        flex={6}
        flexDir={["column", "column", "row"]}
        align="center"
        justify="center"
      >
        <Flex
          px={[2, 4, 36]}
          flex={2}
          flexDir="column"
          justify="center"
          align="center"
        >
          <Text fontSize="lg" fontWeight="normal" textAlign="center">
            A beautiful, customisable New Tab page for Chrome, and Edge.
          </Text>
          <Text fontSize="lg" fontWeight="normal" textAlign="center">
            <strong>100% free.</strong> No subscriptions. No ads.
          </Text>
          <Button
            colorScheme="linkedin"
            rounded="full"
            px="3"
            py={2}
            leftIcon={<LuChrome />}
          >
            Add to Chrome
          </Button>
        </Flex>
        <Flex flex={4} w="full">
          <Heading>Hello right</Heading>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;
