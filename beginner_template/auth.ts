
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import connectDB from "./utils/db"
import User from "./models/User";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),

    CredentialsProvider({
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
  }
})