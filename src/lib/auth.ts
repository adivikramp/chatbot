// https://example.com/api/auth/callback/google

import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Resend({
        apiKey: process.env.AUTH_RESEND_KEY,
        from: "no-reply@chatbot.com"
    })],
})