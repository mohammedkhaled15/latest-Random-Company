import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/Google";
import GithubProvider from "next-auth/providers/Github";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDb from "@/utils/connectDb";
import User from "@/models/User";
import bycryptjs from "bcryptjs";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        await connectDb();
        try {
          const foundedUser = await User.findOne({ email: credentials.email });
          if (foundedUser) {
            const isPassCorrect = await bycryptjs.compare(
              credentials.password,
              foundedUser.password
            );
            if (isPassCorrect) {
              const { password, ...others } = foundedUser;
              return foundedUser;
            } else {
              throw new Error("Invailed Credentials");
            }
          } else {
            throw new Error("Invailed Credentials");
          }
        } catch (error) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: { error: "/dashboard/login" },
});

export { handler as GET, handler as POST };
