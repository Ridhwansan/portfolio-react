import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface PortfolioCardProps {
  image: string;
  title: string;
  desc: string;
  href: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
  image,
  title,
  desc,
  href,
}) => {
  return (
    <Card maxW="2xl" borderRadius="24">
      <CardBody>
        <Image
          src={image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          w="100%"
          h="330"
        />
        <Stack mt="6" spacing="2">
          <Heading size="md">{title}</Heading>
          <Text>{desc}</Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="0" mt="0">
          <Button
            rightIcon={<FaArrowRightLong />}
            variant="outline"
            colorScheme="blue"
            as="a"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Portfolio
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default PortfolioCard;
