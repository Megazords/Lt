'use client';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

const Navbar: React.FunctionComponent = () => {
  return (
    <Flex
      textShadow="0px 0px 2px rgba(0,0,0,1)"
      color="white"
      width="100vw"
      position="fixed"
      top="0"
      alignItems="center"
      padding="1rem"
      justifyContent="space-between">
      <Link display="flex" alignItems="center" href="/">
        <Image src="Lt_logo.png" height="56px"></Image>
        <Text
          fontSize="24px"
          paddingLeft="12px"
          fontWeight="bold"
          fontFamily="Montserrat">
          luztuna.pt
        </Text>
      </Link>
      <Flex width="30%" justifyContent="space-evenly">
        <Link href="/">
          <Text fontFamily="Montserrat">Página Inicial</Text>
        </Link>
        <Link href="/membros">
          <Text fontFamily="Montserrat">Membros</Text>
        </Link>
        <Link href="/palmares">
          <Text fontFamily="Montserrat">Palmarés</Text>
        </Link>
        <Link href="/contactos">
          <Text fontFamily="Montserrat">Contactos</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
