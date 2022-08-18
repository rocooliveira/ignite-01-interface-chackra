import { Box, Flex, Icon, Text, Tooltip } from "@chakra-ui/react";

import { RiInformationLine } from "react-icons/ri";

import { ContinentInfoProps } from '../pages/continente/[slug]';


interface ItemInfoProps{
  amount: number;
  title: string;
  infoIcon?: boolean;
  citiesInfo?: string;
}


const ItemInfo = ({amount, title, infoIcon, citiesInfo}:ItemInfoProps) => (
  <Flex direction='column' align={['flex-start','center']}>
    <Text color='yellow.350' fontSize={['2xl', '5xl']} fontWeight={600}>{amount}</Text>
    
    <Flex direction='row' align='center' gap={1} >

      <Text color='gray.600' fontSize={['md', '2xl']} fontWeight={600}>{title}</Text>
      {infoIcon === true &&
        <Box mt={1}>
          <Tooltip label={citiesInfo}>
            <span>
              <Icon as={RiInformationLine} cursor='pointer' fontSize={['md','lg']} color='gray.400'/>
            </span>
          </Tooltip>
        </Box>
      }
    </Flex>
  </Flex>
);

export default function ContinentInfo({data}:ContinentInfoProps) {
  return (
    <Flex justifyContent='space-evenly'>

      <ItemInfo  amount={data.countries} title='países'/>

      <ItemInfo  amount={data.languages} title='línguas'/>

      <ItemInfo  amount={data.cities} title='cidades +100' citiesInfo={data.cities_info} infoIcon={true} />

    </Flex>
  )
}