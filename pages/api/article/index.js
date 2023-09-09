import client from "../../../lib/prismadb";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const articles = await prisma.$queryRaw`SELECT * FROM test_data`;
  res.status(200).send(articles);
}
