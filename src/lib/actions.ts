"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

/** User login action */
export async function login(formData: FormData) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";

        default:
          return "Somenthing went wrong.";
      }
    }
    throw error;
  }
}

/** New user register */
export async function register(formData: FormData) {
  return console.log(
    `username: ${formData.get("username")}, email: ${formData.get(
      "email"
    )}, password: ${formData.get("password")}`
  );
}
