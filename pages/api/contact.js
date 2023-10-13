import client from "../../lib/prismadb.ts";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, phone, message } = req.body;
        if (
        !email ||
        !email.includes("@") ||
        !name ||
        name.trim() === "" ||
        !message ||
        message.trim() === ""
        ) {
        res.status(422).json({ message: "Invalid input." });
        return;
        }
        //store in db
        await saveMessageToDB(name, email, phone, message);
        res.status(201).json({ message: "Message sent!" });
    }
    }

    async function saveMessageToDB(name, email, phone, message) {
    const result = await client.contact.create({
        data: {
        name,
        email,
        phone,
        message,
        },
    });
    console.log(result);
    }