import { Box, Flex, Heading, Text } from "@chakra-ui/react";

interface BannerContinentProps{
  title: string;
  image: string;
}

export default function BannerContinent({title, image}:BannerContinentProps) {
  return (
    <Flex
      w='full'
      h={['300px', '500px']}
      bgImage={`url(${image})`}
      bgPos='center'
      bgRepeat='no-repeat'
      bgSize='cover'
      align={['center', 'center' , 'end']}
      justify={['center','center', 'flex-start']}
    >
      <Box px={[0,0,28]} pb={[0,0,16]}>
        <Heading fontWeight={500} color='white' fontSize={['5xl']}>{title}</Heading>
      </Box>
    </Flex>
  )
}