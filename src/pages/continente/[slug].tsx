import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import BannerContinent from "../../compoments/BannerContinent";
import Cities from "../../compoments/Cities";
import ContinentInfo from "../../compoments/ContinentInfo";

import { Header } from "../../compoments/Header";

export type ContinentInfoProps = {
  data:{
    countries: number;
    languages: number;
    cities: number;
    cities_info: string;
  }
};

export interface ContinentProps{
  continent: {
    slug: string;
    title: string;
    description: string;
    banner_image: string;
    countries: ContinentInfoProps['data']['countries'];
    languages: ContinentInfoProps['data']['languages'];
    cities: ContinentInfoProps['data']['cities'];
    cities_info: ContinentInfoProps['data']['cities_info'];
    cities_list: {
      city: string,
      country: string,
      thumb: string,
      flag: string,
    }[]
  }
}

export default function Continent({continent}:ContinentProps) {
  // const router = useRouter();
  // const { slug } = router.query;

  return (
    <>
      <Header />
      <BannerContinent title={continent.title} image={continent.banner_image} />
      
      <Flex direction='column' maxW='1160px' mx='auto' my={20} px={[6, 'auto']} gap={16}>
        
        <Grid templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']} gap={[5,10,16]} alignItems='center'>
          <GridItem>
            <Text
              textAlign='justify'
              fontSize={["lg", "lg", "xl", "2xl"]}
            >
              {continent.description}
            </Text>
          </GridItem>
          <GridItem>
            <ContinentInfo data={continent}/>
          </GridItem>
        </Grid>

        <Box>
          <Heading color='gray.600' fontSize={'2xl'} fontWeight={500} mb={6}>Cidades +100</Heading>
          <Cities continent={continent} />

        </Box>

      </Flex>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {

  return {
    paths: [],
    fallback: 'blocking',
  }
}


export const getStaticProps: GetStaticProps = async ({params}:any) => {


  const continent = await fetch(`http://localhost:3000/api/continents/${params.slug}`)
    .then(response => response.json())
    .then(data => data);


  return {
    props:{
      continent
    },
    revalidate: 2000
  }
}

