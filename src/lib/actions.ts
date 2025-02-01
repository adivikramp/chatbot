"use server"

import { signIn, signOut } from "./auth";

export async function signInActionGoogle() {
    await signIn("google", { redirectTo: "/company-details" });
}

export async function signInActionEmail(formData) {
    try {
        await signIn("credentials", {
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/company-details",
        });
    } catch (error) {
        console.log(error)
        return "Invalid credentials. Please try again.";
    }
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}

export async function submitDetails() {
    await signOut({ redirectTo: "/" });
}