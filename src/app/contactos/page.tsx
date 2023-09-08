'use client';

import Parallax from '../../components/Parallax';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Box
        height="33vh"
        width="100%"
        overflow="hidden"
        _after={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)', //  adjust colors
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
          <Text fontFamily="Montserrat" padding="0 0 1rem 0" color="black">
            963 330 001
          </Text>
          <Text fontFamily="Montserrat" color="black">
            luz.tuna@gmail.com
          </Text>
        </Flex>
      </Parallax>
    </>
  );
};

export default Home;
