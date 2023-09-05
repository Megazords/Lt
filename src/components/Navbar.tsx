'use client';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Flex, Icon, Image, Link, Text } from '@chakra-ui/react';
import { GrSearch } from 'react-icons/gr';

const Navbar: React.FunctionComponent = () => {
  return (
    <Flex
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

        <SearchIcon></SearchIcon>
      </Flex>
    </Flex>
  );
};

export default Navbar;
