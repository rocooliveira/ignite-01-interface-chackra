// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  slug: string;
  title: string;
  summary: string;
  image: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const data = [
    { 
      slug: 'america-do-norte',
      title: 'América do Norte',
      summary: 'texto texto',
      image: 'http://localhost:3000//images/continents/north-america.jpg'
    },
    { 
      slug: 'america-do-sul',
      title: 'América do Sul',
      summary: 'texto america do sul',
      image: 'https://picsum.photos/id/100/1920/1280'
    },
    { 
      slug: 'asia',
      title: 'Ásia',
      summary: 'Ásia texto 123',
      image: 'https://picsum.photos/id/101/1920/1280'
    },
    { 
      slug: 'africa',
      title: 'África',
      summary: 'Lorem Ipsum',
      image: 'https://picsum.photos/id/102/1920/1280'
    },
    { 
      slug: 'europa',
      title: 'Europa',
      summary: 'teste teste',
      image: 'http://localhost:3000//images/continents/europe.jpg'
    },
    { 
      slug: 'africa',
      title: 'África',
      summary: 'Lorem Ipsum Amet Dollor',
      image: 'https://picsum.photos/id/103/1920/1280'
    },
  ];


  res.status(200).json(data)
}
