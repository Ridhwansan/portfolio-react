import { Box, Container, Flex, Text } from "@chakra-ui/react";
import ExpertiseCard from "./ExpertiseCard";

const Expertise = () => {
  return (
    <Box w="100%" mb="12">
      <Container maxWidth="8xl">
        <Flex direction="column" gap="5">
          <Text color="#282938" fontSize="30" fontWeight="700">
            My Expertise
          </Text>
          {/* Card Start */}
          <Flex direction="row" gap="6" justify="space-between">
            <ExpertiseCard
              image="/product-chain-new.jpg"
              title="Fullstack Mastery"
              desc="Expertise in end-to-end solution development, from robust backend to responsive and interactive user interfaces"
            />
            <ExpertiseCard
              image="/tag.jpg"
              title="Agile Development Lead"
              desc="Leading teams in Agile development methodologies, focused on rapid and iterative delivery without compromising quality"
            />
            <ExpertiseCard
              image="/development.jpg"
              title="UI Slicing"
              desc="Proficient in transforming intricate UI/UX designs into, ensuring every detail aligns with design specifications"
            />
            <ExpertiseCard
              image="/feather-pen.jpg"
              title="Innovative Problem Solving"
              desc="Creative in solving complex technical challenges, emphasizing performance optimization and superior user experience"
            />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Expertise;
