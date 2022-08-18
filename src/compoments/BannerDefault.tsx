import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";


export default function BannerDefault(){
  return(
    <Flex
      w='full'
      h={['163px', '250px', '250px', '370px']}
      bgImage="url('/images/banner-bg-1.jpg')"
      bgPos='top'
      bgRepeat='no-repeat'
    >
      <HStack 
        w='full' 
        justify={['center', 'space-between']}
        align='center'
        mx="auto"
        px={['4', '10', '15', '20', '36']}
      >
          <Box>
            <Heading color='gray.100' fontSize={['xl','2l','2xl','2xl','4xl']} fontWeight={500}>
              5 Continentes,<br/>infinitas possibilidades.
            </Heading>
            <Text
              color='gray.300'
              fontSize={['md','xl']}
              fontWeight={400}
              maxW={['full', 'full', 'full', '550px']}
              mt={5}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Box>
            <Image
              src="/images/airplane.svg"
              display={['none', 'none', 'none', 'block']}
              ms={5}
              transform='translateY(30px)'
            />
          </Box>
     
      </HStack>
    </Flex>
  )
}