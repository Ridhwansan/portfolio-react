import { Box, Container, Flex, Image, Text } from "@chakra-ui/react";

const Aboutme = () => {
  return (
    <Box w="100%">
      <Container maxW="8xl">
        <Flex justify="space-between" gap="10">
          {/* Kiri */}
          <Flex w="100%">
            <Image src="/aboutnew.jpg" alt="photo" w="100%" h="100%"></Image>
          </Flex>
          {/* Kanan */}
          <Flex w="100%" direction="column" gap="5" justifyContent="center">
            <Text color="#282938" fontSize="50" fontWeight="700">
              About Me
            </Text>
            <Text
              color="#282938"
              fontSize="18"
              fontWeight="400"
              lineHeight="1.7"
            >
              I’m an undergraduate junior Fullstack Web Developer, enthusiastic
              about leveraging creativity, innovation, and problem-solving
              skills in web development. I have built a solid foundation in
              programming and web development principles through my academic
              coursework, freelance projects, and personal initiatives.
              Proficient in technologies like JavaScript, HTML, CSS, and
              frameworks such as React and Node.js, I focus on creating robust
              and user-friendly web applications. Continuously learning about
              new technologies and best practices, I thrive in collaborative,
              fast-paced environments where I can contribute to impactful
              projects that enhance user experiences.
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Aboutme;
