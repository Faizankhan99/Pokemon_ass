import {
  Box,
  Button,
  Heading,
  Image,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GET_EVALUTION, GET_POKEMON_ID } from "../../Graphql/Queries";
import { useQuery } from "@apollo/client";
import { ModalComponent } from "./Modal";

export default function Detail(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [response, setResponse] = useState();
  const navigate = useNavigate();
  const { id } = useParams();
  const [res, setRes] = useState();
  const [loding, setLoding] = useState(false);
  const { data } = useQuery(GET_POKEMON_ID, {
    variables: { id: id },
  });
  const Response = useQuery(GET_EVALUTION, {
    variables: { id: id },
  });

  const handleClick = (item) => {
    setIsModalVisible(true);
    setResponse(item);
  };

  useEffect(() => {
    setTimeout(() => {
      handleData();
    }, 100);
    setLoding(true);
  }, [data]);

  const handleData = async () => {
    setLoding(true);
    try {
      const resObj = await data;
      setRes(resObj.pokemon);
      setLoding(false);
    } catch (err) {
      console.log("err");
      setLoding(false);
    }
  };

  if (loding) {
    return (
      <Stack>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }
  console.log(res);
  return (
    <Box>
      <Box border="2px solid red">
        <Heading>DETAIL-PAGE</Heading>
      </Box>
      <Box ml="60px" mt="30px">
        <Text fontSize="6xl">{res?.name}</Text>
        <Text fontSize="6xl" color="#919191">
          #{res?.number}
        </Text>
        <Box
          border="4px solid black"
          w="50%"
          m="auto"
          boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;"
        >
          <Image ml="20%" objectFit="cover" src={res?.image} alt="" />
        </Box>

        <Box border="4px solid black" m="auto" mt="40px" h="300px" w="70%">
          <SimpleGrid columns={[1, 2]} gap="20px" mt="25px">
            <span>
              <Heading>Heigt</Heading>
              <Text fontSize="3xl">{res?.height?.maximum}</Text>
            </span>
            <span>
              <Heading fontSize="4xl">Weight</Heading>
              <Text fontSize="3xl">{res?.weight?.maximum}</Text>
            </span>
            <span>
              <Heading fontSize="4xl">classification</Heading>
              <Text fontSize="3xl">{res?.classification}</Text>
            </span>
          </SimpleGrid>
        </Box>

        {/*--------------------- Type---------- */}

        <Box mt="10px" border="2px solid black">
          <Text fontSize="6xl">Type</Text>
          {res?.types.map((elem) => (
            <Button
              fontSize="30px"
              ml="30px"
              mt="20px"
              mb="9px"
              cursor="auto"
              bg="skyblue "
            >
              {elem}
            </Button>
          ))}
        </Box>

        {/*--------------------- Weaknesses---------- */}

        <Box mt="10px" border="2px solid black">
          <Text fontSize="6xl">Weaknesses</Text>
          {res?.weaknesses?.map((elem) => (
            <Button
              cursor="auto"
              fontSize="30px"
              ml="30px"
              mt="20px"
              mb="9px"
              bg="orange"
            >
              {elem}
            </Button>
          ))}
        </Box>

        {/* ---------------------EVALUTION________---------------- */}

        <Box border="2px solid black" mt="20px">
          <Heading fontSize="35px">EVALUTION</Heading>
          <Text fontWeight="bold" color="gray">
            CLick Here For Evalution
          </Text>
          <Button
            fontSize="20px"
            mt="20px"
            mb="9px"
            bg="Red"
            onClick={() => handleClick(Response.data)}
          >
            EVALUTION
          </Button>
        </Box>

        <Box mt="30px">
          <Button
            bg="orange"
            color="white"
            fontsize="30px"
            onClick={() => navigate("/")}
          >
            Explore More Pokemon
          </Button>
        </Box>

        <ModalComponent
          data={response}
          isOpen={isModalVisible}
          setIsOpen={setIsModalVisible}
        />
      </Box>
    </Box>
  );
}

// Display name, image, height, weight, classification, type, weakness, and resistance of the Pokemon.
// Include a button to open a popup showing the Pokemon's evolutions.
