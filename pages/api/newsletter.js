import client from "../../lib/prismadb.ts";
//handler function that makes call to prisma db
export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;
    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }
    //store in db
    await saveEmailToDB(email);
    res.status(201).json({ message: "Signed up!" });
  }
}

async function saveEmailToDB(email) {
  const result = await client.newsletter.create({
    data: {
      email,
    },
  });
  console.log(result);
}
