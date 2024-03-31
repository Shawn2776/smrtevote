import User from "@/models/User";
import { CredentialsProvider } from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "text", placeholder: "Email" },
        organization: {
          label: "Organization",
          type: "text",
          placeholder: "Organization",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        await connectMongoDB();
        const user = await User.findOne({ email: credentials.email });

        if (!user)
          throw new Error(
            "Email, Organization/Group or Password is incorrect."
          );

        if (user.organization !== credentials.organization)
          throw new Error(
            "Email, Organization/Group or Password is incorrect."
          );

        const validPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!validPassword)
          throw new Error(
            "Email, Organization/Group or Password is incorrect."
          );

        const { password, ...userWithoutPassword } = user;

        return userWithoutPassword;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
