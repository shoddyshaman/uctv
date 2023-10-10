import { PrismaClient } from "@prisma/client"

declare global {
  var prisma: PrismaClient | undefined
}

const client = globalThis.prisma || new PrismaClient()
if (process.env.NODE_ENV !== "production") globalThis.prisma = client

export default client

// import { PrismaClient } from '@prisma/client'

// // Avoid instantiating too many instances of Prisma in development
// // https://www.prisma.io/docs/support/help-articles/nextjs-prisma-client-dev-practices#problem
// let prisma

// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient()
// } else {
//   if (!global.prisma) {
//     global.prisma = new PrismaClient()
//   }
//   prisma = global.prisma
// }

// export default prisma