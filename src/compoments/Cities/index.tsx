
import {Grid} from "@chakra-ui/react";
import { ContinentProps } from "../../pages/continente/[slug]";
import City from "./City";

export default function Cities({ continent }: ContinentProps) {
  return (
    <Grid
      templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']} 
      gap={16} 
      alignItems='center'
    >
      { continent.cities_list.map(item => (
        <City key={item.city} city={item.city} country={item.country} flag={item.flag} image={item.thumb} />
      ))}

    </Grid>
  )
}