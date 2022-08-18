import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

export type IconTypes = 'building' | 'cocktail' | 'earth' | 'museum' | 'surf';

interface FeatureProps{
    icon: IconTypes;
    text: string;
}

export default function Feature({icon, text}:FeatureProps){

    const isMobile = useBreakpointValue({
        base: false,
        sm: true
      })    

    return (
        <Flex direction={['row', 'column']} align='center' justify='center'>
          { 
            isMobile 
            ? <Image src={`/icons/${icon}.svg`} w='85px' h='85px' mb={5}/>
            : <Text color='yellow.400' fontSize='4xl' me={2}>•</Text>
          }
          <Text color='gray.600' fontSize={['md', 'xl', '2xl']} fontWeight='600'>{text}</Text>
        </Flex>
    )
}