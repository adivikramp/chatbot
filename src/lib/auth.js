// https://example.com/api/auth/callback/google

import NextAuth, { CredentialsSignin } from "next-auth";
import Google from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { getGuest, createGuest } from "./data-service";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: {},
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { username, email, password } = credentials;

        if (
          username === "abc" &&
          email === "abc@gmail.com" &&
          password === "abc"
        ) {
          return {
            id: "1",
            username: "abc",
            name: "John Doe",
            email: "abc@gmail.com",
          };
        } else {
          throw new CredentialsSignin("Email / password mismatch");
        }
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingUser = await getGuest(user.email);

        if (!existingUser)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session }) {
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
