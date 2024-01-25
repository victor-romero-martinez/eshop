import NextAuth, { DefaultSession, User } from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    token: string;
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's username. */
      name: string;
      /** The user's token auth. */
      token: string;
    } & DefaultSession["user"];
  }
}
