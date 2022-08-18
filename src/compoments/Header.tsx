import { Box, Flex, Grid, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

import { RiArrowLeftSLine } from 'react-icons/ri';

export function Header(){
  const { asPath } = useRouter();
  const isHomePage = asPath === '/';

  return (
    <Flex
      as='header'
      maxWidth={1440}
      w='100%'
      h='20'
      mx='auto'
      mt='4'
      px='6'
      align='center'
      justify='center'
    >
      <Grid alignItems='center' justifyContent='center' templateColumns='repeat(3, 1fr)' w='full' maxW='1160px'>
        <Flex justifyContent='flex-start'>
          { ! isHomePage &&
          <Link href='/'>
            <a>
              <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} />
            </a>
          </Link>
          }
        </Flex> 

        <Flex justifyContent='center'>
          <Image src='/logo.png' w={['80px', '185px']}/>
        </Flex>
      </Grid>
    </Flex>
  )
}