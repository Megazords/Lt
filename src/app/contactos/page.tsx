import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Contactos: React.FunctionComponent = () => {
  return (
    <>
      <Box
        mt="88px"
        height={['20vh', '30vh', '40vh', '50vh', '60vh']}
        width="100%"
        overflow="hidden">
        <Image src="lusiada.png" objectFit="cover" width="100%" />
      </Box>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        backgroundColor="white"
        my={['2rem', '2rem', '4rem', '4rem', '4rem']}>
        <Text padding="0 0 0.5rem 0" color="black">
          Tomás &quot;Slimani&quot; Silva, Magister Tunae:
        </Text>
        <Text padding="0 0 1rem 0" color="black">
          968 742 583
        </Text>
        <Text color="black">luz.tuna@gmail.com</Text>
      </Flex>
    </>
  );
};

export default Contactos;
