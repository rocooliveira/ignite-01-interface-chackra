import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  slug: string;
  title: string;
  description: string;
  banner_image: string;
  countries: number;
  languages: number;
  cities: number;
  cities_info: string;
  cities_list: {
    city: string,
    country: string,
    thumb: string,
    flag: string,
  }[]
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query;
  

  const data = [
    
    { 
      slug: 'america-do-norte',
      title: 'América do Norte',
      description: 'texto texto',
      banner_image: 'https://picsum.photos/id/200/1920/1280',
      countries: 42,
      languages: 8,
      cities: 24,
      cities_info: 'lorem ipsum 1',
      cities_list: [
        {
          city: "Noblestown",
          country: "Finland",
          thumb: "https://picsum.photos/seed/Finland/200/200",
          flag: "https://picsum.photos/seed/Finland2/50/50"
        },
        {
          city: "Deltaville",
          country: "Fiji",
          thumb: "https://picsum.photos/seed/Fiji/200/200",
          flag: "https://picsum.photos/seed/Fiji2/50/50"
        },
        {
          city: "Deseret",
          country: "Papua New Guinea",
          thumb: "https://picsum.photos/seed/Papua/200/200",
          flag: "https://picsum.photos/seed/Papua2/50/50"
        },
        {
          city: "Downsville",
          country: "Philippines",
          thumb: "https://picsum.photos/seed/Philippines/200/200",
          flag: "https://picsum.photos/seed/Philippines2/50/50"
        },
        {
          city: "Rockingham",
          country: "Kiribati",
          thumb: "https://picsum.photos/seed/Kiribati/200/200",
          flag: "https://picsum.photos/seed/Kiribati2/50/50"
        }
      ]
    },
    { 
      slug: 'america-do-sul',
      title: 'América do Sul',
      description: 'Amet nulla ea aliqua elit nostrud tempor veniam mollit dolor incididunt deserunt tempor est eu.',
      banner_image: 'http://localhost:3000/images/continents/topbanner-europe.jpg',
      countries: 50,
      languages: 18,
      cities: 47,
      cities_info: 'lorem ipsum dolor 2',
      cities_list: [
        {
          city: "Healy",
          country: "Iceland",
          thumb: "https://picsum.photos/seed/Iceland/200/200",
          flag: "https://picsum.photos/seed/Iceland2/50/50"
        },
        {
          city: "Cassel",
          country: "Nicaragua",
          thumb: "https://picsum.photos/seed/Nicaragua/200/200",
          flag: "https://picsum.photos/seed/Nicaragua2/50/50"
        },
        {
          city: "Bodega",
          country: "Canada",
          thumb: "https://picsum.photos/seed/Canada/200/200",
          flag: "https://picsum.photos/seed/Canada2/50/50"
        },
        {
          city: "Ebro",
          country: "Tuvalu",
          thumb: "https://picsum.photos/seed/Tuvalu/200/200",
          flag: "https://picsum.photos/seed/Tuvalu2/50/50"
        },
        {
          city: "Maplewood",
          country: "Virgin Islands",
          thumb: "https://picsum.photos/seed/Virgin/200/200",
          flag: "https://picsum.photos/seed/Virgin2/50/50"
        }
      ]
    },
    { 
      slug: 'asia',
      title: 'Ásia',
      description: 'Elit nostrud ex irure proident occaecat deserunt et nisi mollit aliquip dolore culpa velit. Magna reprehenderit aliquip non amet proident dolore voluptate ut ullamco aliquip labore exercitation aliquip in. Aliquip cillum exercitation est laborum in est laboris officia cupidatat anim. Consequat do enim non non deserunt ullamco voluptate est enim quis deserunt.',
      banner_image: 'https://picsum.photos/id/201/1920/1280',
      countries: 30,
      languages: 12,
      cities: 34,
      cities_info: 'lorem ipsum 3',
      cities_list: [
        {
          city: "Barrelville",
          country: "Equatorial G",
          thumb: "https://picsum.photos/seed/Equatorial/200/200",
          flag: "https://picsum.photos/seed/Equatorial2/50/50"
        },
        {
          city: "Matthews",
          country: "Togo",
          thumb: "https://picsum.photos/seed/Togo/200/200",
          flag: "https://picsum.photos/seed/Togo2/50/50"
        },
        {
          city: "Strong",
          country: "Niger",
          thumb: "https://picsum.photos/seed/Niger/200/200",
          flag: "https://picsum.photos/seed/Niger2/50/50"
        },
        {
          city: "Efland",
          country: "Antarctica",
          thumb: "https://picsum.photos/seed/Antarctica/200/200",
          flag: "https://picsum.photos/seed/Antarctica2/50/50"
        },
        {
          city: "Forestburg",
          country: "Afghanistan",
          thumb: "https://picsum.photos/seed/Afghanistan/200/200",
          flag: "https://picsum.photos/seed/Afghanistan2/50/50"
        }
      ]
    },
    { 
      slug: 'africa',
      title: 'África',
      description: 'Exercitation pariatur consectetur excepteur duis in labore id commodo occaecat eiusmod. Ad commodo elit adipisicing culpa ipsum aliquip laboris ea in sint dolore. Veniam voluptate exercitation sint laborum in ad cillum irure deserunt. Consectetur excepteur fugiat mollit enim cillum sunt et id labore ut minim non. Excepteur incididunt non do deserunt ad sit ex excepteur pariatur ea sint. Ut ipsum do et id nostrud esse quis elit mollit tempor duis irure. Velit exercitation excepteur anim dolor est incididunt eiusmod tempor labore velit voluptate et deserunt.',
      banner_image: 'https://picsum.photos/id/202/1920/1280',
      countries: 40,
      languages: 12,
      cities: 34,
      cities_info: 'lorem ipsum 4',
      cities_list: [
        {
          city: "Lindcove",
          country: "Bulgaria",
          thumb: "https://picsum.photos/seed/Bulgaria/200/200",
          flag: "https://picsum.photos/seed/Bulgaria2/50/50"
        },
        {
          city: "Brandermill",
          country: "Poland",
          thumb: "https://picsum.photos/seed/Poland/200/200",
          flag: "https://picsum.photos/seed/Poland2/50/50"
        },
        {
          city: "Cleary",
          country: "Virgin Islands",
          thumb: "https://picsum.photos/seed/Virgin/200/200",
          flag: "https://picsum.photos/seed/Virgin2/50/50"
        },
        {
          city: "Westboro",
          country: "Kyrgyzstan",
          thumb: "https://picsum.photos/seed/Kyrgyzstan/200/200",
          flag: "https://picsum.photos/seed/Kyrgyzstan2/50/50"
        },
        {
          city: "Hiko",
          country: "Lebanon",
          thumb: "https://picsum.photos/seed/Lebanon_/200/200",
          flag: "https://picsum.photos/seed/Lebanon2/50/50"
        },
        {
          city: "Bannock",
          country: "Tokelau",
          thumb: "https://picsum.photos/seed/Tokelau/200/200",
          flag: "https://picsum.photos/seed/Tokelau2/50/50"
        }
      ]
    },
    { 
      slug: 'europa',
      title: 'Europa',
      description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
      banner_image: 'http://localhost:3000/images/continents/topbanner-europe.jpg',
      countries: 50,
      languages: 60,
      cities: 27,
      cities_info: 'lorem ipsum dolor 5',
      cities_list: [
        {
          city: "Linganore",
          country: "Trinidad and Tobago",
          thumb: "https://picsum.photos/seed/Trinidad/200/200",
          flag: "https://picsum.photos/seed/Trinidad2/50/50"
        },
        {
          city: "Wadsworth",
          country: "Guinea-Bissau",
          thumb: "https://picsum.photos/seed/Guinea/200/200",
          flag: "https://picsum.photos/seed/Guinea2/50/50"
        },
        {
          city: "Cornfields",
          country: "Guam",
          thumb: "https://picsum.photos/seed/Guam/200/200",
          flag: "https://picsum.photos/seed/Guam2/50/50"
        },
        {
          city: "Nutrioso",
          country: "New Zealand",
          thumb: "https://picsum.photos/seed/New/200/200",
          flag: "https://picsum.photos/seed/New2/50/50"
        },
        {
          city: "Kerby",
          country: "Western Sahara",
          thumb: "https://picsum.photos/seed/Western/200/200",
          flag: "https://picsum.photos/seed/Western2/50/50"
        },
        {
          city: "Dorneyville",
          country: "Hungary",
          thumb: "https://picsum.photos/seed/Hungary/200/200",
          flag: "https://picsum.photos/seed/Hungary2/50/50"
        },
        {
          city: "Chase",
          country: "Slovak Republic",
          thumb: "https://picsum.photos/seed/Slovak/200/200",
          flag: "https://picsum.photos/seed/Slovak2/50/50"
        }
      ]
    },
    { 
      slug: 'oceania',
      title: 'Oceania',
      description: 'Mollit non irure enim proident adipisicing enim dolore et cupidatat. Tempor id quis laborum tempor sunt esse magna laboris anim sunt ad excepteur. Minim irure do id veniam fugiat nulla esse. Consectetur pariatur nisi irure commodo nulla aute do reprehenderit aliqua quis. Culpa elit anim deserunt eiusmod occaecat ex. Enim elit quis labore eiusmod nisi cupidatat esse cillum. Sint veniam et amet ut id et occaecat.',
      banner_image: 'https://picsum.photos/id/203/1920/1280',
      countries: 40,
      languages: 12,
      cities: 34,
      cities_info: 'lorem ipsum 6',
      cities_list: [
        {
          city: "Layhill",
          country: "St. Pierre and Miquelon",
          thumb: "https://picsum.photos/seed/St/200/200",
          flag: "https://picsum.photos/seed/St2/50/50"
        },
        {
          city: "Hampstead",
          country: "Algeria",
          thumb: "https://picsum.photos/seed/Algeria/200/200",
          flag: "https://picsum.photos/seed/Algeria2/50/50"
        },
        {
          city: "Brenton",
          country: "US Minor Outlying Islands",
          thumb: "https://picsum.photos/seed/US/200/200",
          flag: "https://picsum.photos/seed/US2/50/50"
        },
        {
          city: "Clay",
          country: "Bahrain",
          thumb: "https://picsum.photos/seed/Bahrain/200/200",
          flag: "https://picsum.photos/seed/Bahrain2/50/50"
        },
        {
          city: "Kiskimere",
          country: "Malta",
          thumb: "https://picsum.photos/seed/Malta/200/200",
          flag: "https://picsum.photos/seed/Malta2/50/50"
        }
      ]
    },
  ];

  const ret = data.filter(item => item.slug == slug)[0] ?? {};

  res.status(200).json( ret );
}
