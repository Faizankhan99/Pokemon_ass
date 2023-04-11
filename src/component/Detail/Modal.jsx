import {
  Avatar,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon } from "@chakra-ui/icons";
export function ModalComponent({ isOpen, setIsOpen, data }) {
  const evalution = data?.pokemon?.evolutions;
  const onClose = () => {
    setIsOpen(false);
  };
  console.log(evalution);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>EVALUTION</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {evalution?.map((elem) => (
              <Box m="auto" mt="30px" w="80%">
                <Avatar
                  size="6xl"
                  objectFit="cover"
                  src={elem?.image}
                  alt=""
                  border="5px solid black"
                />
                <Box m="auto" ml="80px">
                  <Text fontSize="xl">{elem?.name}</Text>
                  <Text fontSize="xl" color="#919191">
                    #{elem?.number}
                  </Text>
                </Box>
                <Box>
                  {elem?.types?.map((elem) => (
                    <Button ml="20%" cursor="auto" bg="yellow">
                      {elem}
                    </Button>
                  ))}
                </Box>
                <ArrowLeftIcon
                  transform="rotate(270deg)"
                  fontSize="60px"
                  ml="40%"
                  mt="20px"
                />
              </Box>
            ))}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
