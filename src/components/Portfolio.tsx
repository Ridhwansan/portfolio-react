import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { FaDribbble } from "react-icons/fa";
import PortfolioCard from "./PortfolioCard";
const Portfolio = () => {
  return (
    <Box w="100%" mb="10">
      <Container maxW="8xl">
        {/* Atas */}
        <Flex justify="space-between">
          <Flex direction="column" gap="5">
            <Text color="#282938" fontSize="30" fontWeight="700">
              My Portfolio
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Button
              leftIcon={<FaDribbble />}
              colorScheme="pink"
              variant="solid"
              fontWeight="400"
              as="a"
              href="https://dribbble.com/Ridhwansan"
              target="blank"
              rel="noopener noreferrer"
            >
              Visit My Dribbble
            </Button>
          </Flex>
        </Flex>
        {/* Card Start */}
        <Flex justify="space-between" gap="6" direction="row" mt="5">
          <PortfolioCard
            image="/Cover1.jpg"
            title="Terbit Mobile App"
            desc="Terbit is an app designed for monitoring sedentary activities. It provides interactive analysis through detailed graphs, offers consultations with nutrition experts, and features informative articles from credible sources."
            href="https://drive.google.com/file/d/1FUNg3dBsMsDG6bBUzZdVXXg4l5dEIOLb/view?usp=sharing"
          />
          <PortfolioCard
            image="/Cover2.jpg"
            title="Griya Alam Mobile App"
            desc="Griya Alam is an AR Immersive Property app that offers an interactive experience for exploring facilities and information about Griya Alam Exclusive Boarding House, blending the real world with virtual elements innovatively."
            href="https://drive.google.com/file/d/1cEgdzYoaoRi27qi-gyucl9oJCa3GLU00/view"
          />
        </Flex>
      </Container>
    </Box>
  );
};

export default Portfolio;
