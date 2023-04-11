import { Box, Heading, SimpleGrid, Skeleton, Stack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_POKEMON_LIST } from "../../Graphql/Queries";
import Pokemon from "./Pokemon";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Pagination from "../Pagination";

export default function Home() {
  const { data } = useQuery(GET_POKEMON_LIST, { variables: { first: 151 } });
  const [res, setRes] = useState();
  const [loding, setLoding] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(20);
  const [pageLength, setpageLength] = useState();
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
      console.log(resObj.pokemons);
      setRes(resObj.pokemons);
      setpageLength(resObj.pokemons.length);
      setLoding(false);
    } catch (err) {
      console.log("err");
      setLoding(false);
    }
  };

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = res?.slice(firstPostIndex, lastPostIndex);
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

  return (
    <Box>
      <Box border="2px solid red">
        <Heading>HOME-PAGE</Heading>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} gap="50px">
        {currentPost?.map((elem) => (
          <Box key={elem.number}>
            <Link to={`/${elem.id}`}>
              <Pokemon {...elem} />
            </Link>
          </Box>
        ))}
      </SimpleGrid>
      <Pagination
        totalPost={pageLength}
        postPerPage={postPerPage}
        setCurrentPage={setCurrentPage}
      />
    </Box>
  );
}
