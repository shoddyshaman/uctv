import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email"
import NextAuth from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "../../../lib/prismadb.ts";
import nodemailer from 'nodemailer';
import Handlebars from "handlebars";
import { readFileSync } from "fs";
import path from "path";



const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: process.env.EMAIL_SERVER_PORT,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
  secure: true
});

6
const emailsDir = path.resolve(process.cwd(), 'emails');

const sendVerificationRequest = ({ identifier, url}) => {
  const emailFile = readFileSync(path.join(emailsDir, 'confirm-email.html'), {
    encoding: 'utf8',
  });
  const emailTemplate = Handlebars.compile(emailFile);
  // console.log("emailTemplate", emailTemplate)
  // console.log("identifier", identifier)
  transporter.sendMail({
    to: identifier,
    from: `"✨ UmeshVishwas" ${process.env.EMAIL_FROM}`,
    subject: 'Sign in to UmeshVishwas',
    html: emailTemplate({
      baseUrl: process.env.NEXTAUTH_URL,
      signin_url: url,
      email: identifier,
    }),
  });
};

export const authOptions = {
  adapter:PrismaAdapter(client),
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      sendVerificationRequest,
      maxAge: 10 * 60, // Magic links are valid for 10 min only
    }),
  ],
  // secret: process.env.JWT_SECRET,
  pages: {
    signIn: "/signin",
    signOut: "/",
    error: "/",
    verifyRequest: "/",
  }
};

export default NextAuth(authOptions);
