import { Box, Button } from "@chakra-ui/react";
import React from "react";

export default function Pagination({ totalPost, postPerPage, setCurrentPage }) {
  console.log("dsfs", totalPost / postPerPage);
  let page = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    page.push(i);
  }
  console.log(page);
  return (
    <Box>
      {page.map((page, i) => (
        <Button
          key={i}
          onClick={() => setCurrentPage(page)}
          fontSize="30px"
          ml="20px"
          mt="30px"
          h="50px"
          w="50px"
          bg="orange"
        >
          {page}
        </Button>
      ))}
    </Box>
  );
}
