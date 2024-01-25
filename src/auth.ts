import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { postData } from "./lib/fetch/postFetch";
import { TUserAuthResponse } from "./definitions/type";

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
      async authorize(credentials) {
        const user = await getUser(
          credentials.username as string,
          credentials.password as string
        );

        if (!user) return null;

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.username;
        token.token = user.token;
      }

      return token;
    },

    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token.name;
        session.user.token = token.token;
      }

      return session;
    },
  },
});
