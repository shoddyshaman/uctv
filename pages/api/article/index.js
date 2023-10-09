import client from "../../../lib/prismadb.ts";

export default async function handler(req, res) {
  // const prisma = client();
  const posts = await client.$queryRaw`SELECT * FROM test_data`;
  // console.log(posts);  
  res.status(200).json(posts);
}
