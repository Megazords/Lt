'use client';

import { Box, Flex, Image, Text } from '@chakra-ui/react';

const Home: React.FunctionComponent = () => {
  return (
    <>
      <Box height="70vh" backgroundColor="black" overflow="hidden" mt="88px">
        <Image
          src="LuzandTuna__Teaser.gif"
          w="100%"
          h="100%"
          objectFit={['cover', 'cover']}
        />
      </Box>
      <Flex
        w="100%"
        alignItems="center"
        py="3rem"
        direction="column"
        color="black"
        fontFamily="Montserrat"
        lineHeight="1.75"
        position="relative">
        <Image src="Lt_logo.png" w="200px" pb="1rem" />
        <Flex direction="row" px="4rem">
          <Box w="832px" h="640px">
            <Image
              w="100%"
              h="100%"
              src="lt_figueira.png"
              objectFit="cover"
              objectPosition="60% 50%"
            />
          </Box>
          <Flex direction="column" alignItems="center">
            <Text w="60%" py="7.5px">
              A Luz&Tuna - Tuna da Universidade Lusíada de Lisboa foi fundada a
              23 de Setembro de 1994.
            </Text>
            <Text w="60%" py="7.5px">
              Surge nos "Jardins da Universidade". É constituída em
              exclusividade por alunos e antigos alunos da nossa Universidade -
              no entanto, nunca deixou de distinguir como Tunos Honorários,
              todos aqueles que com reconhecidos méritos souberam dignificar a
              Lusíada através da sua/nossa Tuna.
            </Text>
            <Text w="60%" py="7.5px">
              A Luz&Tuna nasceu para fazer Serenatas; para encantar e para
              actuar pelas Academias em representação da Universidade Lusíada.
              Entre as mais iniciativas onde tem participado, culturais,
              académicas e de beneficência, destacam-se, naturalmente, os
              "Festivais de Tunas", sempre ganhando prémios mas,
              fundamentalmente, deixando saudades, tanto em Portugal como no
              mundo.
            </Text>
            <Text w="60%" py="7.5px">
              Na selecção do seu repertório tem havido uma preocupação de um
              percurso pelas diversas matrizes da música portuguesa,
              privilegiando-se os temas dos grandes nomes da guitarra e do fado
              de Lisboa, sem esquecer, os seus próprios originais. Uma variedade
              e uma riqueza cultural ao nível musical, que tem bases nas mais
              diversas raízes da música mundial, distinguem a Luz&Tuna pela sua
              postura, desempenho e dedicação, sem nunca esquecer a sua essência
              académica.
            </Text>
            <Text w="60%" py="7.5px">
              Assim, a Luz&Tuna é… "a memória de sons conflituantes de uma
              Juventude que procura conjugar o rigor de execução com alguns
              suaves devaneios e desvios que são o tempero de toda a arte, o sal
              e o sentido da vida. Um pequeno sopro (re)criador sobre tantas e
              tão belas músicas de sempre".
            </Text>
            <Text textAlign="center" w="100%" py="7.5px">
              SOL LUCET TUNAE
            </Text>
          </Flex>
          <Box w="832px" h="640px">
            <Image
              w="100%"
              h="100%"
              src="Lt_postura.jpg"
              objectFit="cover"
              objectPosition="60% 55%"
            />
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
