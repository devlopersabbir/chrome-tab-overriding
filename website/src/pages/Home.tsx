import { Box, Button, Flex, Image, Text, useColorMode } from "@chakra-ui/react";
import { LuChrome } from "react-icons/lu";
import Layout from "../components/Layout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Home = () => {
  const { colorMode } = useColorMode();
  return (
    <Layout>
      <Flex flex={5} w="full" flexDir={["column", "column", "row"]}>
        <Flex
          gap={2}
          p={[2, 4]}
          flex={1.5}
          flexDir="column"
          justify="center"
          align="center"
        >
          <Text fontSize="lg" fontWeight="normal" textAlign="center">
            A beautiful, customisable New Tab page
            <br /> for Chrome, and Edge.
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
        <Flex
          flex={3.5}
          p={[2, 4]}
          justify="center"
          align="center"
          overflow="hidden"
        >
          <Flex
            w="full"
            h="480px"
            bg={colorMode === "dark" ? "gray.700" : "gray.400"}
            rounded="xl"
            shadow="lg"
            overflow="hidden"
            flexDir="column"
          >
            <Box
              mb={5}
              mt={5}
              mx="auto"
              top={1}
              bg={colorMode === "dark" ? "gray.600" : "gray.500"}
              w="70%"
              h="7"
              rounded="full"
            />

            <Swiper
              loop
              autoplay={{ delay: 1000 }}
              style={{ width: "100%", height: "100%" }}
            >
              <SwiperSlide>
                <Image
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="1.png"
                  alt="slide 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="2.png"
                  alt="slide 1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  objectFit="cover"
                  w="full"
                  h="full"
                  src="3.png"
                  alt="slide 1"
                />
              </SwiperSlide>
            </Swiper>
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Home;
