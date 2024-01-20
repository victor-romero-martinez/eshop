"use server";

export async function login(formData: FormData) {
  return console.log(
    `email: ${formData.get("email")}, password: ${formData.get("password")}`
  );
}

export async function register(formData: FormData) {
  return console.log(
    `username: ${formData.get("username")}, email: ${formData.get(
      "email"
    )}, password: ${formData.get("password")}`
  );
}
