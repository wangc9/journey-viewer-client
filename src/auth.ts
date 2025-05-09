import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { UnauthorisedError } from "./types/utils";
import type { Provider } from "next-auth/providers";

const providers: Provider[] = [
  Credentials({
    credentials: {
      email: {},
      password: {},
    },
    authorize: async (credentials) => {
      console.log(credentials);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
        {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      console.log(response);
      const user: User | UnauthorisedError = await response.json();

      if ("message" in user) {
        throw new Error("Invalid credentials.");
      }

      return user;
    },
  }),
];

export const providerMap = providers
  .map((provider) => {
    if (typeof provider === "function") {
      const providerData = provider();
      return { id: providerData.id, name: providerData.name };
    } else {
      return { id: provider.id, name: provider.name };
    }
  })
  .filter((provider) => provider.id !== "credentials");

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
});
