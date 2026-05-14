
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import NextAuth, { getServerSession, NextAuthOptions } from "next-auth"
import Google from "next-auth/providers/google"
import { prisma } from "./connec"
/*import connectDB from "./utils/db"
import User from "./models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";*/

export const authOptions:NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),

    /*CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials:{
        email: {label: "Email", type: "text"},
        password: {label: "Password", type: "password"},
      },

      async authorize(credentials){
        await connectDB();

        try{
          if (
            !credentials ||
            typeof credentials.email !== "string" ||
            typeof credentials.password !== "string"
          ) {
            throw new Error("Invalid credentials");
          }

          const user = await User.findOne({email: credentials.email});

          if (user){
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password, 
              user.password
          );

            if (isPasswordCorrect){
              return user;
            } else{
              throw new Error("Wrong credentials");
            }
          } else{
            throw new Error("User not found");
          }
        } catch(err: any){
          throw new Error(err);
        }
      }
    })
  ],
  pages:{
    error: "/dasboard/login",
  }*/
]
}

export const getAuthSession = () => getServerSession(authOptions);