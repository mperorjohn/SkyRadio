import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  // Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { VscMute } from "react-icons/vsc";
import { CiStreamOn } from "react-icons/ci";
import { BiPlay, BiPowerOff } from "react-icons/bi";
import { AiFillFastBackward, AiFillFastForward } from "react-icons/ai";

const RadioHome = () => {
  return (
    <Container p={10} >
      <Card m={"auto"} borderRadius={"3xl"} >
        <CardHeader bg={"orange.400"} borderTopRadius={"2xl"}>
          <Heading
            fontSize={"2x"}
            textAlign={"center"}
            color={"rgba(11,27,103,1)"}
          >
            Your Number one music station...
          </Heading>
        </CardHeader>
        <hr />
        <CardBody p={20}>
          <Heading
            textAlign={"center"}
            fontSize={"5xl"}
            color={"rgba(11,27,103,1)"}
          >
            <Container ml={20}>
              <CiStreamOn />
            </Container>
            99.5FM
          </Heading>
          <Text textAlign={"center"} fontWeight={"bold"} color={"orange.400"}>
            Max FM
          </Text>
        </CardBody>
        <CardFooter>
          <Flex
            gap={4}
            justifyContent={"center"}
            alignContent={"center"}
            margin={"auto"}
            alignItems={"center"}
          >
            <Button
              backgroundColor={"rgba(11,27,103,1)"}
              color={"white"}
              _hover={{ backgroundColor: "orange.400", transition: "1.2s" }}
            >
              <Box>
                <AiFillFastBackward />
              </Box>
            </Button>
            <Button
              backgroundColor={"rgba(11,27,103,1)"}
              color={"white"}
              _hover={{ backgroundColor: "orange.400", transition: "1.2s" }}
            >
              <Box>
                <BiPlay />
              </Box>
            </Button>
            <Button
              backgroundColor={"rgba(11,27,103,1)"}
              color={"white"}
              _hover={{ backgroundColor: "orange.400", transition: "1.2s" }}
            >
              <Box>
                <AiFillFastForward />
              </Box>
            </Button>

            {/* <Flex>
              <Box mr={2}>
                <VscMute />
              </Box>{" "}
              <input type="range" color={"rgba(11,27,103,1)"} />
            </Flex> */}
          </Flex>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default RadioHome;
