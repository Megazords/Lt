'use client';

import Parallax from '@/components/parallax';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Box
        height="75vh"
        width="100%"
        overflow="hidden"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.2)', // Adjust the opacity by changing the alpha value (0.5 for 50% opacity), // Ensure the pseudo-element doesn't interfere with interactions
        }}>
        <Image src="Lt_foto.jpg" objectFit="cover" width="100%"></Image>
      </Box>
      <Parallax>
        <Flex
          direction="column"
          height="50vh"
          alignItems="center"
          justifyContent="center"
          backgroundColor="white">
          <Text fontFamily="Montserrat" padding="0 0 1rem 0">
            963 330 001
          </Text>
          <Text fontFamily="Montserrat">luz.tuna@gmail.com</Text>
        </Flex>
      </Parallax>
    </>
  );
};

export default Home;
