'use client';
import { Flex, Image, Link, Text } from '@chakra-ui/react';

const Navbar: React.FunctionComponent = () => {
  return (
    <Flex
      color="black"
      bgColor="white"
      width="100%"
      maxWidth="100%"
      position="fixed"
      top="0"
      alignItems="center"
      padding="1rem"
      justifyContent={['center', 'space-between']}
      h="88px"
      className="navbar">
      <Link display="flex" alignItems="center" href="/">
        <Image src="Lt_logo.png" height={['36px', '48px', '56px']} />
        <Text
          fontSize={['18px', '20px', '24px']}
          paddingLeft="12px"
          fontWeight="bold"
          fontFamily="Montserrat">
          luztuna.pt
        </Text>
      </Link>
      <Flex
        minWidth={['100%', '100%', '400px']}
        width={['100%', '100%', '30%']}
        justifyContent={['center', 'space-evenly']}
        fontWeight="700">
        <Link href="/">
          <Text fontFamily="Montserrat" margin={['0', '0', '0 5px']}>
            Página Inicial
          </Text>
        </Link>
        <Link href="/membros">
          <Text fontFamily="Montserrat" margin={['0', '0', '0 10px']}>
            Membros
          </Text>
        </Link>
        <Link href="/palmares">
          <Text fontFamily="Montserrat" margin={['0', '0', '0 10px']}>
            Palmarés
          </Text>
        </Link>
        <Link href="/contactos">
          <Text fontFamily="Montserrat">Contactos</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
