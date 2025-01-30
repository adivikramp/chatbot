"use server"

import { signIn, signOut } from "./auth";

export async function signInActionGoogle() {
    await signIn("google", { redirectTo: "/company-details" });
}

export async function signInActionEmail() {
    await signIn("resend", { redirectTo: "/company-details" });
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function submitDetails() {
    await signOut({ redirectTo: "/" });
}