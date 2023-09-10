'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Box height="33vh" width="100%" overflow="hidden">
        <Image src="Lt_foto.jpg" objectFit="cover" width="100%"></Image>
      </Box>
      <Flex>
        <Text>Lista de Pessoas</Text>
      </Flex>
    </>
  );
};

export default Home;
