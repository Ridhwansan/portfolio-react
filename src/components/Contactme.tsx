import {
  Box,
  Button,
  Container,
  Flex,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

const Contactme = () => {
  return (
    <Box w="100%" mb="10">
      <Container maxW="6xl">
        {/* Atas */}
        <Flex direction="column" alignItems="Center" gap="5" mt="10">
          <Text color="#282938" fontSize="50" fontWeight="700">
            Contact Me
          </Text>
          <Text color="#282938" fontSize="18" fontWeight="400">
            Get in touch: Let's Create something amazing together
          </Text>
        </Flex>
        {/* Bawah */}
        <Flex
          direction="column"
          mt="50"
          gap="5"
          mb="50"
          bg="rgba(226, 203, 162, 0.7)"
          p="8"
          borderRadius="24"
          boxShadow="lg"
        >
          {/* Start First name last name */}
          <Flex direction="row" justify="space-between" alignItems="center">
            <Input placeholder="First Name" maxW="48%" h="12" bg="#FFF"></Input>
            <Input placeholder="Last Name" maxW="48%" h="12" bg="#FFF"></Input>
          </Flex>
          {/* Start email and phone */}
          <Flex direction="row" justify="space-between" alignItems="center">
            <Input placeholder="Email" maxW="48%" h="12" bg="#FFF"></Input>
            <Input
              placeholder="Phone Number"
              maxW="48%"
              h="12"
              bg="#FFF"
            ></Input>
          </Flex>
          {/* Start Message */}
          <Textarea
            placeholder="Type your message..."
            h="40"
            bg="#FFF"
          ></Textarea>
        </Flex>
        <Flex direction="row" justifyContent="center">
          <Button
            w="20%"
            bg="#9E7959"
            variant="solid"
            color="#FFF"
            pt="6"
            pb="6"
            pr="12"
            pl="12"
            _hover={{ bg: "#84654A", color: "white" }}
          >
            Submit
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contactme;
