import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { postData } from "./lib/fetch/postFetch";

async function getUser(username: string, password: string) {
  const res = await postData("https://dummyjson.com/auth/login", {
    username,
    password,
  });

  return res;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const user = await getUser(
          credentials.username as string,
          credentials.password as string
        );

        if (!user) return null;

        console.log("auth.js user: ", user);

        return user;
      },
    }),
  ],
});
