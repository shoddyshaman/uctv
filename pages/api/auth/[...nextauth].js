import FacebookProvider from "next-auth/providers/facebook";
import NextAuth from "next-auth"


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)

