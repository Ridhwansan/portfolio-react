import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";

import "@fontsource/poppins";

const Navbar = () => {
  return (
    <Box
      bgColor="light-gray"
      boxShadow="xl"
      bg="white"
      h="60px"
      position="fixed"
      top="0"
      width="100%"
      zIndex="100"
    >
      <Container maxWidth="8xl" h="60px">
        <Flex justifyContent="space-between" alignItems="center" h="60px">
          <Image
            src="/logo.png"
            boxSize="50px"
            _hover={{ cursor: "pointer" }}
          />
          <Flex justify="space-evenly" gap="30" w="50">
            <Text
              color="#394149"
              fontSize="lg"
              _hover={{ color: "#9E7959", cursor: "pointer" }}
              fontFamily="poppins"
            >
              Home
            </Text>
            <Text
              color="#394149"
              fontSize="lg"
              _hover={{ color: "#9E7959", cursor: "pointer" }}
              fontFamily="poppins"
            >
              Portfolio
            </Text>
            <Text
              color="#394149"
              fontSize="lg"
              _hover={{ color: "#9E7959", cursor: "pointer" }}
              fontFamily="poppins"
            >
              About me
            </Text>
            <Text
              color="#394149"
              fontSize="lg"
              _hover={{ color: "#9E7959", cursor: "pointer" }}
              fontFamily="poppins"
            >
              Testimonials
            </Text>
          </Flex>

          <Button
            bg="#FFF"
            color="#9E7959"
            border="1px solid #9E7959"
            _hover={{ color: "#FFF", bg: "#9E7959", border: "0px" }}
            fontFamily="poppins"
          >
            Contact Me
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
