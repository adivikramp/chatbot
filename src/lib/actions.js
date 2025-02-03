"use server";

import { signIn, signOut } from "./auth";

export async function signInActionGoogle() {
  await signIn("google", { redirectTo: "/" });
}

export async function signInActionEmail(formData) {
  try {
    await signIn("credentials", {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      redirectTo: "/",
    });
  } catch (error) {
    console.log(error);
    return "Invalid credentials. Please try again.";
  }
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
