import {
  Box,
  Container,
  Divider,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="#f0f0f0">
      <Container maxW="8xl" mt="10">
        <Flex justifyContent="center" pt="4">
          <Image src="/logo.png" h="50" w="50"></Image>
        </Flex>
        <Flex justifyContent="center" gap="5" mt="10" mb="10">
          {/* Instagram Start */}
          <IconButton
            as="a"
            href="https://www.instagram.com/rdesign.ui/"
            target="blank"
            rel="noopener noreferrer"
            fontSize="20"
            aria-label="Instagram"
            borderRadius="full"
            variant="outline"
            borderColor="#000"
            icon={<FaInstagram />}
          />
          {/* Linkedin Start */}
          <IconButton
            as="a"
            href="https://www.linkedin.com/in/ridhwansan/"
            target="blank"
            rel="noopener noreferrer"
            fontSize="20"
            aria-label="Linkedin"
            borderRadius="full"
            variant="outline"
            borderColor="#000"
            icon={<FaLinkedin />}
          />
          {/* Behance Start */}
          <IconButton
            as="a"
            href="#"
            target="blank"
            rel="noopener noreferrer"
            fontSize="20"
            aria-label="Behance"
            borderRadius="full"
            variant="outline"
            borderColor="#000"
            icon={<FaBehance />}
          />
        </Flex>
        <Divider></Divider>
        <Flex justifyContent="center">
          <Text alignItems="center">
            Copyright 2024 Muhammad Ridhwan Santosa
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
