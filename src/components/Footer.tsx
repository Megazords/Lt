'use client';

import { Flex, Text } from '@chakra-ui/react';

const Footer: React.FunctionComponent = () => {
  return (
    <Flex backgroundColor="white" justifyContent="center">
      <Text
        color="black"
        fontSize="7pt"
        fontFamily="Montserrat"
        paddingBottom="1rem">
        Luz&Tuna - Tuna da Universidade Lusíada de Lisboa - EST. 1994 - SOL
        LUCET TUNA
      </Text>
    </Flex>
  );
};

export default Footer;
