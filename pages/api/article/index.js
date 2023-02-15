import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const articles = await prisma.post.findMany();
  res.status(200).json(articles);
}
