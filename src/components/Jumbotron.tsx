import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import "@fontsource/poppins";

const Jumbotron = () => {
  return (
    <Box
      bgGradient="linear(to-b,#E3C6AD 0%,#FFF 100%)"
      w="100%"
      p={4}
      color="white"
      mb="12"
      mt="59"
    >
      <Container maxWidth="8xl" mt="50">
        <Flex justify="space-evenly">
          {/* Sisi kiri */}
          <Flex direction="column" w="100%" gap="5">
            <Text color="#282938" fontSize="24" fontWeight="600">
              Hey, I am Ridhwan
            </Text>
            <Text
              color="#282938"
              fontSize="80"
              fontWeight="700"
              lineHeight="1.2"
            >
              Fullstack Web{" "}
              <Text as="span" color="#9E7959">
                Developer
              </Text>
            </Text>
            <Text color="#282938" fontSize="18" fontWeight="400">
              I transform ideas into innovative and effcient digital solutions
              that drive growth and streamline process
            </Text>
            <Flex>
              <Button
                bg="#9E7959"
                variant="solid"
                color="#FFF"
                pt="6"
                pb="6"
                pr="12"
                pl="12"
                _hover={{ bg: "#84654A", color: "white" }} // Slightly darker shade
              >
                Get in Touch
              </Button>
            </Flex>
          </Flex>
          {/* Sisi Kanan */}
          <Flex direction="column" w="100%" alignItems="flex-end">
            <Image
              src="/jumbonew.jpg"
              w="80%"
              h="100%"
              boxShadow="dark-lg"
              p="1"
              rounded="md"
              bg="white"
              borderTopRightRadius="20"
              borderTopLeftRadius="70"
              borderBottomRightRadius="70"
              borderBottomLeftRadius="20"
            ></Image>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Jumbotron;
