
import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface CityProps{
  city: string;
  country: string;
  image: string;
  flag: string;
}

export default function City({ city, country, image, flag }: CityProps) {
  return (
    <GridItem h={60}>
      <Image src={image} h='173px' w='full' objectFit='cover' borderTopRadius={5} />
      <Flex
        direction='row'
        align='center'
        justifyContent='space-between'
        border='1px'
        borderTop={0}
        borderColor='yellow.350'
        borderBottomRadius={5}
        p={5}
      >

        <Flex direction='column' >
          <Box>
            <Heading fontSize='xl' fontWeight={500}>{country}</Heading>
          </Box>
          <Box>
            <Text mt={3} color='gray.500' fontSize='md' fontWeight={500} >{city}</Text>
          </Box>
        </Flex>

        <Box >
          <Image
            src={flag}
            h='30px'
            w='30px'
            objectFit='cover'
            borderRadius='full'
          />
        </Box>
      </Flex>
    </GridItem>
  )
}