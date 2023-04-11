import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function Pokemon(props) {
  return (
    <Box
      mt="30px"
      border="2px solid black"
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px;"
    >
      <Box boxSize="300px">
        <Image
          h="200px"
          m="40px"
          objectFit="cover"
          src={props.image}
          alt=""
          transition=" all 1s ease-in-out"
          _hover={{
            // transform: "scale(1.1)",
            // borderRadius: "100%",
            filter: "grayscale(100%)",
            brightness: "40%",
          }}
        />
      </Box>
      <Text color="#919191" fontSize="20px">
        #{props.number}
      </Text>
      <Text fontSize="30px">{props.name}</Text>
      {props.types.map((elem, i) => (
        <Button m="10px" fontSize="20px" ml="7px" cursor="auto">
          {elem}
        </Button>
      ))}
    </Box>
  );
}
