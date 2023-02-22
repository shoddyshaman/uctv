import client from "../../../lib/prismadb";

export default async function handler(req, res) {
  const articles = await client.post.findMany();
  res.status(200).json(articles);
}
