import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";

interface ExpertiseCardProps {
  image: string;
  title: string;
  desc: string;
}

const ExpertiseCard: FC<ExpertiseCardProps> = ({ image, title, desc }) => {
  return (
    <Card width="100%" bg="rgba(226, 203, 162, 0.7) ">
      <CardHeader>
        <Image
          bg="white"
          alignContent="center"
          padding="2"
          rounded="md"
          borderRadius="8px"
          src={image}
          fit="cover"
          alt="section logo"
          boxSize="60px"
        ></Image>
        <Heading size="md" mt="4">
          {" "}
          {title}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{desc}</Text>
      </CardBody>
    </Card>
  );
};

export default ExpertiseCard;
