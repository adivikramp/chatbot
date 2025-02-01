// https://example.com/api/auth/callback/google

import NextAuth, { CredentialsSignin } from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                email: {},
                password: {}
            },
            async authorize(credentials) {
                const { username, email, password } = credentials

                if (username === "abc" && email === "abc@gmail.com" && password === "abc") {
                    return { id: "1", username: "abc", name: "John Doe", email: "abc@gmail.com" }
                } else {
                    throw new CredentialsSignin("Email / password mismatch")
                }
            }
        }),
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })],
})