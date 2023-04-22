// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('contacting external API...');
  let response: Response = await fetch('http://127.0.0.1:8080/');
  let data = await response.json();
  res.status(200).json({ name: data.toString() });
}
