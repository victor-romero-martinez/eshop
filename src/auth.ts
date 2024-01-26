import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { postData } from "./lib/fetch/postFetch";
import { TUserAuthResponse } from "./types/type";

async function getUser(username: string, password: string) {
  const res = await postData<TUserAuthResponse>(
    "https://dummyjson.com/auth/login",
    {
      username,
      password,
    }
  );

  return res;
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await getUser(
          credentials.username as string,
          credentials.password as string
        );

        if (!user) return null;

        const name = user.username;

        return { ...user, name };
      },
    }),
  ],
});
